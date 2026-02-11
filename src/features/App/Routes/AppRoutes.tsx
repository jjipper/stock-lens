import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { ProtectedRoute } from './ProtectedRoute';
import Header from '../../Layout/Header/Header';
import Main from '../../Main/Main';
import Issue from '../../Issue/Issue';
import Stock from '../../Stock/Stock';
import NotFound from '../../NotFound/NotFound';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="content-wrapper">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/issue">
            <Route path=":id" element={<Issue />} />
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
