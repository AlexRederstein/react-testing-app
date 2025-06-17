import "./App.css";

import Header from "./components/Header/Header.jsx";
import ContentContainer from "./components/ContentContainer/ContentContainer.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Paralax from "./components/Paralax/Paralax.jsx";

function App() {
  return (
    <>
      <Header />
      <Paralax />
      <ContentContainer />
      <Footer />
    </>
  );
}

export default App;
