// import { ProtectedRoute } from './ProtectedRoute';
import { AppBarLayout, MainLayout } from 'features/layout';
import { NotFoundPage } from 'features/pages/NotFoundPage/NotFoundPage';
import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ScrollToTop } from './ScrollToTop';

const MainPage = lazy(() => import('features/pages/MainPage/MainPage'));
const IssuePage = lazy(() => import('features/pages/IssuePage/IssuePage'));
const IssueDetailPage = lazy(
	() => import('features/pages/IssueDetailPage/IssueDetailPage'),
);
const StockPage = lazy(() => import('features/pages/StockPage/StockPage'));
const StockDetailPage = lazy(
	() => import('features/pages/StockDetailPage/StockDetailPage'),
);

export const AppRoutes = () => {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route index element={<MainPage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Route>

				<Route element={<AppBarLayout />}>
					<Route path="/issue">
						<Route index element={<IssuePage />} />
						<Route path=":id" element={<IssueDetailPage />} />
					</Route>

					<Route path="/stock">
						<Route index element={<StockPage />} />
						<Route path=":ticker" element={<StockDetailPage />} />
					</Route>
				</Route>

				{/* <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        /> */}
			</Routes>
		</BrowserRouter>
	);
};
