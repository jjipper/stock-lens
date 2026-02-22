import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { ProtectedRoute } from './ProtectedRoute';
import { MainLayout } from 'features/layout';
import MainPage from 'features/pages/MainPage/MainPage';
import IssuePage from 'features/pages/IssuePage/IssuePage';
import { NotFoundPage } from 'features/layout/';
import StockPage from 'features/pages/StockPage/StockPage';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<MainPage />} />
          <Route path="issue/:id" element={<IssuePage />} />
          <Route path="stock" element={<StockPage />}>
            {/* <Route path=":ticker" element={<StockPage />} /> */}
          </Route>
          <Route path="*" element={<NotFoundPage />} />
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
