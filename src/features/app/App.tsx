import { AppRoutes } from 'features/app/Routes/AppRoutes';

import { ReactQueryProvider } from './provider/ReactQueryProvider';

const App = () => {
	return (
		<ReactQueryProvider>
			<AppRoutes />
		</ReactQueryProvider>
	);
};

export default App;
