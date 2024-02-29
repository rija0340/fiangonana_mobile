import Index from "./raharaha/Index";
import SideBar from "./nav/SideBar";
import MainLayout from "./MainLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <MainLayout>
        <BrowserRouter>
        <Routes>
          <Route path="raharaha/" element={<Index />} />
          {/* <Route path="raharaha/recherche" element={<About />} />
          <Route path="raharaha/saisie" element={<Contact />} /> */}
        </Routes>
      </BrowserRouter>
    </MainLayout>
  )
}

export default App
