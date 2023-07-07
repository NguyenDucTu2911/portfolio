import { Projects, ErrorPage } from "../components";

const Root: React.FC = () => (
    <>
        {[
            {
                path: "/Project",
                element: <Projects />,
                errorElement: <ErrorPage />,
            },
        ]}
    </>
);

export default Root;