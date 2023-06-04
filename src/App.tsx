import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home';
import Layout from './components/Layout/Layout';
import MoviePage from './pages/MoviePage/MoviePage';
import MovieRoom from './pages/MovieRoom/MovieRoom';

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
        {
          path: 'room/:id',
          element: <MovieRoom />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
