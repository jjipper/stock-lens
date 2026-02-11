import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { ProtectedRoute } from './ProtectedRoute';
import MainPage from '../../pages/MainPage/MainPage';
import IssuePage from '../../pages/IssuePage/IssuePage';
import NotFound from '../../pages/NotFound/NotFound';
import Header from '../../widgets/Header/Header';
import Stock from '../../features/Stock/Stock';

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
            <Route path=":ticker" element={<Stock />} />
          </Route>
          <Route path="*" element={<NotFound />} />

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
