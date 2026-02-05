import { AuthProvider } from './Routes/AuthContext';
import { Header } from '../Header/Header';

function App() {
  return (
    <AuthProvider>
      <Header />
    </AuthProvider>
  );
}

export default App;
