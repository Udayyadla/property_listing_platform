import { Home } from './components/Home/Home'
import './App.css'
import { Navbar } from './components/About/navbar'
import { About } from './Components/About/about'
import { Hero } from './Components/Properties/Hero'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer } from './Components/About/footer'
import { SearchForm } from './Components/Properties/SearchForm'
import { PropertiesDetails } from './Components/Properties/PropertiesDetails'
import { InquiryForm } from './Components/About/inquiryform'
function App() {

  return (
    <>

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/searchForm" element={<SearchForm/>} />
          <Route path='/propertiesDetails/:id' element={<PropertiesDetails/>} />
        </Routes>
      </Router>
      <Footer/>
    </>
    
  )
}

export default App
