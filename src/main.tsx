import './index.css';

import App from 'features/app/App.tsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

async function enableMocking() {
	// NOTE: 서버가 없으므로 프로덕션 환경에서 워커 실행
	// if (!import.meta.env.DEV) {
	// 	return;
	// }

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
