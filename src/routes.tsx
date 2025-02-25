import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import UseCases from './pages/UseCases';
import Stakeholders from './pages/Stakeholders';
import Technology from './pages/Technology';
import Team from './pages/Team';
import Contact from './pages/Contact';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'solutions',
        element: <Solutions />,
      },
      {
        path: 'use-cases',
        element: <UseCases />,
      },
      {
        path: 'stakeholders',
        element: <Stakeholders />,
      },
      {
        path: 'technology',
        element: <Technology />,
      },
      {
        path: 'team',
        element: <Team />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
]);
