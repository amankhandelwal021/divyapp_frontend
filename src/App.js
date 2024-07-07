// import logo from './logo.svg';
import "./App.css";
import Header from "./components/Header";
import BottomNav from "./components/BottomNav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <BottomNav />
        <Home />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
