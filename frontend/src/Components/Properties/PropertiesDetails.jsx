import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import '../../Styles/Properties/PropertiesDetails.css';
import { InquiryForm } from "../About/inquiryform";

export const PropertiesDetails = () => {
    const { id } = useParams(); // Extract the id from the URL
    const [property, setProperty] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch property details based on the id
    useEffect(() => {
        const fetchProperty = async () => {
            try {
                setLoading(true);
                const response = await fetch(`https://property-listing-platform.onrender.com/api/property/${id}`);
                if (!response.ok) {
                    throw new Error(`Error fetching data: ${response.statusText}`);
                }
                const data = await response.json();
                setProperty(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProperty();
    }, [id]);

    if (loading) {
        return <div id="loading">Loading...</div>;
    }

    if (error) {
        return <div id="error">Error: {error}</div>;
    }

    if (!property) {
        return <div id="error">No property details found.</div>;
    }

    return (
        <div>
            <div id="property-details-container">
                <h1 id="property-heading">{property.Title}</h1>
                <div id="property-card">
                    <img
                        id="property-image"
                        src={property.Image_URL}
                        alt={property.Title}
                    />
                    {/* <h2 id="property-title">{property.Title}</h2> */}
                    <div id="property-info">
                        <p><strong>Location:</strong> {property.Location}</p>
                        <p><strong>Status:</strong> {property.Status}</p>
                        <p><strong>Type:</strong> {property.Type}</p>
                        <p><strong>Bedrooms:</strong> {property.Bedrooms}</p>
                        <p><strong>Bathrooms:</strong> {property.Bathrooms}</p>
                        <p><strong>Size:</strong> {property.Size} sqft</p>
                        <p><strong>Price:</strong> ₹{property.Price.toLocaleString()}</p>

                        <h3>Amenities:</h3>
                        <ul id="amenities-list">
                            {property.Amenities && property.Amenities.length > 0 ? (
                                property.Amenities.map((amenity, index) => (
                                    <li key={index}>{amenity}</li>
                                ))
                            ) : (
                                <li>No amenities available</li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
            <InquiryForm />
        </div>
    );
};
