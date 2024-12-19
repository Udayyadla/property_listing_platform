import { Home } from './components/Home/Home'
import './App.css'
import { Navbar } from './components/About/navbar'
import { About } from './Components/About/about'
import { Hero } from './Components/Properties/Hero'
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
          <Route path="/hero" element={<Hero />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
