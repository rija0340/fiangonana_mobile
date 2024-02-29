import Index from "./raharaha/Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="raharaha/" element={<Index />} />
      {/* <Route path="raharaha/recherche" element={<About />} />
      <Route path="raharaha/saisie" element={<Contact />} /> */}
    </Routes>
  </BrowserRouter>
  )
}

export default App
