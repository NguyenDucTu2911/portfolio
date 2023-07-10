import { createBrowserRouter } from "react-router-dom";
import { ErrorPage, Projects } from "../components";
import App from "../App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        // children: [
        //     {
        //         path: "Project",
        //         element: <Projects />,
        //         errorElement: <ErrorPage />,
        //     },
        // ],
    },
    {
        path: "Project",
        element: <Projects />,
        errorElement: <ErrorPage />,
    },
]);

export default router;