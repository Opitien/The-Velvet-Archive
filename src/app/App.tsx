import { RouterProvider } from 'react-router';
import { router } from './routes';
import { AuthProvider } from './AuthContext';
import { Effects } from './components/Effects';
import { Toaster } from 'sonner';
import '../styles/fonts.css';

export default function App() {
  return (
    <AuthProvider>
      <Effects />
      <RouterProvider router={router} />
      <Toaster />
    </AuthProvider>
  );
}
