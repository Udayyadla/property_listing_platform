import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import "../../Styles/About/favourite.css";
import {  useState } from "react";
export const NavFavourites = () => {
  let isFavourite = JSON.parse(localStorage.getItem("Favorites")) || [];
  let [updatedData, setUpdateData] = useState(isFavourite);
  //   console.log(isFavourite[0].property);
  const removeHandler = (index) => {
    console.log("Removing property at index:", index);
    const filteredData = updatedData.filter((_, id) => id !== index);
    localStorage.setItem("Favorites", JSON.stringify(filteredData)); // Update localStorage
    setUpdateData(filteredData); // Update state
  };

  return (
    <div className="favourites-container">
      <h2>Your Favourites</h2>
      {isFavourite.length === 0 ? (
        <p>No favourite properties added yet!</p>
      ) : (
        <div className="property-grid">
          {isFavourite.map((item, index) => {
            const property = item.property; // Access the 'property' field
            return (
              <div key={index} className="property-card-1">
                <FontAwesomeIcon
                  icon={faDeleteLeft}
                  className="DeleteIcon"
                  onClick={() => removeHandler(index)}
                />
                <img src={property.Image_URL} alt={property.Type} />
                <div className="fav-status">
                  <span
                    className={
                      property.Status === "Available"
                        ? "for-sale"
                        : property.Status === "Pending"
                        ? "for-pending"
                        : "for-sold"
                    }
                  >
                    {property.Status}
                  </span>
                </div>
                <div className="property-details">
                  <h2>{property.Title}</h2>
                  <p>{property.Location}</p>
                  <p>
                    <strong>Price:</strong> ₹{property.Price}
                  </p>
                  <div className="property-specs">
                    <span>{property.Size} Sqft</span>
                    <span>{property.Bedrooms} Bedroom</span>
                    <span>{property.Bathrooms} Bathroom</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
