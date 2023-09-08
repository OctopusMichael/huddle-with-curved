import Articles from "./Components/Articles";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import "./style/App.css";

function App() {
  return (
    <>
      <header>
        <Navbar />
        <Hero />
      </header>
      <main>
        <Articles />
      </main>
      <Footer />
    </>
  );
}

export default App;
