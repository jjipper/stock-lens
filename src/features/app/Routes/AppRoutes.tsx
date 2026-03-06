// import { ProtectedRoute } from './ProtectedRoute';
import { AppBarLayout, MainLayout } from 'features/layout';
import { NotFoundPage } from 'features/pages/NotFoundPage/NotFoundPage';
import { Loading } from 'features/shared';
import { lazy, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
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
			<ErrorBoundary fallback={<div>Error 발생!</div>}>
				<Suspense fallback={<Loading />}>
					<Routes>
						<Route path="/" element={<MainLayout />}>
							<Route index element={<MainPage />} />
							<Route path="*" element={<NotFoundPage />} />
						</Route>

						<Route path="/issue" element={<AppBarLayout />}>
							<Route index element={<IssuePage />} />
							<Route path=":id" element={<IssueDetailPage />} />
						</Route>

						<Route path="/stock" element={<AppBarLayout />}>
							<Route index element={<StockPage />} />
							<Route path=":ticker" element={<StockDetailPage />} />
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
				</Suspense>
			</ErrorBoundary>
		</BrowserRouter>
	);
};
