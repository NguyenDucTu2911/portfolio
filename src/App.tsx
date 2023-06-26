import { Banner, Header, Nav } from "./components";
import { About, Contact, Work } from "./pages"

function App() {
  return (
    <main className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Header />
      <Banner />
      <Nav />
      <About />
      <Work />
      <Contact />
      {/* <div className='h-[4000px]'></div> */}
    </main>
  );
}

export default App;
