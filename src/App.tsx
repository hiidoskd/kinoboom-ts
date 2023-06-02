import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';
import MoviePage from './pages/MoviePage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '',
          element: <Home />,
        },
        {
          path: 'movies/:id',
          element: <MoviePage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
