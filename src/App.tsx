import React, { ReactElement, useEffect } from "react";

// import { Banner, Header, Nav } from "./components";
// import { About, Contact, Work } from "./pages";
import { Spinner } from "./components";

const Banner = React.lazy(() => import('./components/Banner'));
const Header = React.lazy(() => import('./components/Header'));
const Nav = React.lazy(() => import('./components/Nav'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Work = React.lazy(() => import('./pages/Work'));

interface SuspenseWrapperProps {
  children: ReactElement;
}

const SuspenseWrapper = (props: SuspenseWrapperProps) => {
  return (
    <React.Suspense fallback={<Spinner />}>{props.children}</React.Suspense>
  );
};


function App() {

  useEffect(() => {
    document.body.classList.remove('load');
  }, []);

  return (
      <SuspenseWrapper>
        <main className="bg-site bg-no-repeat bg-cover overflow-hidden">
          <Header />
          <Banner />
          <Nav />
          <About />
          <Work />
          <Contact />
        </main>
      </SuspenseWrapper>
  );
}

export default App;
