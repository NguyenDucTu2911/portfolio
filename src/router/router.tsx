import { createBrowserRouter } from "react-router-dom";
import { ErrorPage, Projects, ProjectDetail } from "../components";
import App from "../App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: "Project",
        element: <Projects />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/Project/:id",
        element: <ProjectDetail />,
        errorElement: <ErrorPage />,
    },
]);

export default router;