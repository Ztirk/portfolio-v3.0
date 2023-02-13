import './App.css'
import Home from './pages/Home'
import Works from './pages/Works'
import Contact from './pages/Contact'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/portfolio-v3.0/' element={<Home />} />
          <Route path='/portfolio-v3.0/works' element={<Works />} />
          <Route path='/portfolio-v3.0/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
