import { Route, Routes } from "react-router-dom";
import Discover from "./components/discover/Discover";
import Event from "./components/event-page/Event";
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
        <Route path="/event/:id" element={<Event />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
