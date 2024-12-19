import './App.css'
import { Navbar } from './Components/About/navbar'
import { About } from './Components/About/about'
import { Home } from './components/Home'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer } from './Components/About/footer'

import { PropertiesDetails } from './Components/Properties/PropertiesDetails'

import { PropertyList } from './Components/About/propertylist'
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
          <Route path="/propertiesDetails/:id" element={<PropertiesDetails />} />
        </Routes>
        <Footer />
      </Router>

    <PropertyList/>
     <Router>
     <InquiryForm/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />  
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
