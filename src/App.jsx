import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Footer from "./components/Footer.jsx";
import LandingSec from "./components/LandingSec.jsx";
import About from "./components/About.jsx";
import ProfileSummary from "./components/ProfileSummary.jsx";
import AmazonBook from "./components/AmazonBook.jsx";
import Article from "./components/Article.jsx";
import AccountsLinks from "./components/AccountsLinks.jsx";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <main>
          <LandingSec />
          <About />
          <ProfileSummary />
          <AmazonBook />
          <Article />
          <AccountsLinks />
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
