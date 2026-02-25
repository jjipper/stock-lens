import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { ProtectedRoute } from './ProtectedRoute';
import { MainLayout } from 'features/layout';
import { AppBarLayout } from 'features/layout';
import MainPage from 'features/pages/MainPage/MainPage';
import IssuePage from 'features/pages/IssuePage/IssuePage';
import IssueDetailPage from 'features/pages/IssueDetailPage/IssueDetailPage';
import StockPage from 'features/pages/StockPage/StockPage';
import StockDetailPage from 'features/pages/StockDetailPage/StockDetailPage';
import { NotFoundPage } from 'features/layout/';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};
