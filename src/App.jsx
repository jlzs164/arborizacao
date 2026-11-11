import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import VoltarTopo from "./components/VoltarTopo.jsx";

import Home from "./pages/Home.jsx";
import CatalogoArvores from "./pages/CatalogoArvores.jsx";
import DetalhesArvore from "./pages/DetalhesArvore.jsx";
import Orientacoes from "./pages/Orientacoes.jsx";
import OndeEncontrar from "./pages/OndeEncontrar.jsx";
import NaoEncontrada from "./pages/NaoEncontrada.jsx";

import "./App.css";

function RestaurarRolagem() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const timeout = window.setTimeout(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);

      return () => window.clearTimeout(timeout);
    }

    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <RestaurarRolagem />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<CatalogoArvores />} />
        <Route path="/catalogo/:id" element={<DetalhesArvore />} />
        <Route path="/orientacoes" element={<Orientacoes />} />
        <Route path="/viveiros" element={<OndeEncontrar />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>

      <Footer />
      <VoltarTopo />
    </BrowserRouter>
  );
}

export default App;
