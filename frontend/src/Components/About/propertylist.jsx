import { useEffect, useState } from "react"
import "../../Styles/About/property.css"
export const PropertyList=()=>{
    const [isProperty,setProperty]=useState([])
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(()=>{
        fetch("https://property-listing-platform.onrender.com/api/getProps")
        .then((response)=>response.json())
        .then((data)=>setProperty(data))
        .catch((error)=>console.error("Error fetching data",error))
    },[])
    // Handle navigation
  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? isProperty.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % isProperty.length);
  };

  // Define visible properties
  const visibleProperties = isProperty.slice(currentIndex, currentIndex + 3);

  return (
    <div className="carousel-container">
      <button className="carousel-btn prev" onClick={handlePrev}>&lt;</button>

      <div className="property-carousel">
        {visibleProperties.map((property) => (
          <div className="property-card" key={property.id}>
            <img src={property.Image_URL} alt={property.Type} />
            <h3>{property.Location}</h3>
          </div>
        ))}
      </div>

      <button className="carousel-btn next" onClick={handleNext}>&gt;</button>
    </div>
  );
}