import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <Home />
      <About />
      <Movies />
    </main>
  );
}
