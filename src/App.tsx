import { Route, Routes } from "react-router-dom";
import Discover from "./components/discover/Discover";
import Footer from "./components/Footer";
import Home from "./components/home/Home";
import Nav from "./components/Nav";
import "./styles/pages/global-rules.scss";
type Props = {};

function App({}: Props) {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
