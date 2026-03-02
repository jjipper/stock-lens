import './index.css';

import App from 'features/app/App.tsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

async function enableMocking() {
	if (!import.meta.env.DEV) {
		return;
	}

	const { worker } = await import('./mocks/browser');
	await worker.start();
}

enableMocking().then(() => {
	createRoot(document.getElementById('root')!).render(
		<StrictMode>
			<App />
		</StrictMode>,
	);
});
