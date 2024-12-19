import './App.css'
import { Navbar } from './Components/About/navbar'
import { About } from './Components/About/about'
import { Home } from './components/Home'
import { Hero } from './Components/Properties/Hero'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer } from './Components/About/footer'
import { PropertiesDetails } from './Components/Properties/PropertiesDetails'
function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/propertiesDetails/:id" element={<PropertiesDetails />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
