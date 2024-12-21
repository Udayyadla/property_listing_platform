import { useEffect, useState } from "react"

export const NavFavourites=()=>{
    const [isFavourite, setFavourite]=useState([]);

    useEffect(()=>{
        const savedFavourites=JSON.parse(localStorage.getItem("Favourites")) || [];
        setFavourite(savedFavourites);
    },[])
    return (
        <div className="favourites-container">
            <h2>Your Favourites</h2>
            {isFavourite.length === 0 ? (
                <p>No favourite properties added yet!</p>
            ) : (
                <div className="favourites-grid">
                    {isFavourite.map((property, index) => (
                        <div key={index} className="favourite-card">
                            <img src={property.Image_URL} alt={property.Type} />
                            <h3>{property.Type}</h3>
                            <p>Price: {property.Price}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}