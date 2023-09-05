import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./Components/ErrorPage";
import Cart from "./Components/Cart";
import About from "./Components/About";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            errorElement: <ErrorPage />,
        },
        {
            path: "cart",
            element: <Cart />,
            errorElement: <ErrorPage />,
        },
        {
            path: "about",
            element: <About />,
            errorElement: <ErrorPage />,
        },
    ]);

    return <RouterProvider router={router} />;
};

export default Router;