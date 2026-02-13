import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { ProtectedRoute } from './ProtectedRoute';
import MainPage from 'features/pages/MainPage/MainPage';
import IssuePage from 'features/pages/IssuePage/IssuePage';
import NotFoundPage from 'features/pages/NotFoundPage/NotFoundPage';
import Header from 'features/widgets/Header/Header';
import StockPage from 'features/pages/StockPage/StockPage';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="content-wrapper">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/issue">
            <Route path=":id" element={<IssuePage />} />
          </Route>
          <Route path="/stock">
            <Route path=":ticker" element={<StockPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />

          {/* <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};
