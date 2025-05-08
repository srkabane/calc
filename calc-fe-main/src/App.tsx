import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

import Welcome from '@/screens/welcome';
import Home from '@/screens/home';

import '@/index.css';

const paths = [
    {
        path: '/',
        element: <Welcome />,
    },
    {
        path: '/draw',
        element: <Home />,
    },
];

const BrowserRouter = createBrowserRouter(paths);

const App = () => {
    return (
        <MantineProvider>
            <RouterProvider router={BrowserRouter} />
        </MantineProvider>
    );
};

export default App;