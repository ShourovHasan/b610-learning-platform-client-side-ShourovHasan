import { useContext } from 'react';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { AuthContext } from './contexts/AuthProvider/AuthProvider';
import { routes } from './Routes/Routes.js/Routes';

function App() {
  const { setDarkMode, darkMode } = useContext(AuthContext);

  return (
    <div className={`${darkMode ? "dark-mode" : "light-mode"}`}>
    {/* // <div className=""> */}
      <RouterProvider router={routes}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
