import { AppRoutes } from 'features/app/Routes/AppRoutes';

import { AppProvider } from './provider/AppProvider';

const App = () => {
	return (
		<AppProvider>
			<AppRoutes />
		</AppProvider>
	);
};

export default App;
