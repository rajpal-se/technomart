import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import DefaultLayout from "../layouts/DefaultLayout";
import PageNotFound from "../pages/404/404";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <DefaultLayout>
                <Home />
            </DefaultLayout>
        ),
    },
    {
        path: "*",
        element: (
            <DefaultLayout>
                <PageNotFound />
            </DefaultLayout>
        ),
    },
]);

export default router;
