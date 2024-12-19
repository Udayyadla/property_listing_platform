import './App.css'
import { Navbar } from './Components/About/navbar'
import { About } from './Components/About/about'
import { Home } from './components/Home'
import { Properties } from './Components/Properties/Hero'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer } from './Components/About/footer'
function App() {
  
  return (
    <>
     <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />   
        <Route path="/about" element={<About />} />
        <Route path="/properties" element={<Properties />} />
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
