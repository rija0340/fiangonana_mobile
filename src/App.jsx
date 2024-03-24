import Index from "./raharaha/Home";
import MainLayout from "./MainLayout";
import Recherche from "./raharaha/Recherche";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Saisie from "./raharaha/Saisie";
import Mambra from "./donnee/Mambra";
import FilazanaIndex from "./filazana/Index";
import FilazanaSaisie from "./filazana/Saisie";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/raharaha/" element={<Index />} />
          <Route path="/raharaha/recherche" element={<Recherche />} />
          <Route path="/raharaha/saisie" element={<Saisie />} />
          <Route path="/filazana/" element={<FilazanaIndex />} />
          <Route path="/filazana/saisie" element={<FilazanaSaisie />} />
          <Route path="/donnee/" element={<Index />} />
          {/* <Route path="raharaha/recherche" element={<About />} />
          <Route path="raharaha/saisie" element={<Contact />} /> */}
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}

export default App
