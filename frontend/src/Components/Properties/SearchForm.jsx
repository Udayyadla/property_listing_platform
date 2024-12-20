import React, { useState } from "react";
import '../../Styles/Properties/SearchForm.css';
import { CompareTool } from "../CompareTool/CompareTool";

export const SearchForm = () => {
    const [Location, setLocation] = useState('');
    const [Price, setPrice] = useState('');
    const [Bedrooms, setBedrooms] = useState('');
    const [Bathrooms, setBathrooms] = useState('');
    const [Type, setType] = useState('');
    const [Amenities, setAmenities] = useState([]);
    const [Size, setSize] = useState(0);
    const [Status, setStatus] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [properties, setProperties] = useState([]);
    const [error, setError] = useState(null);

    const API_URL = 'https://property-listing-platform.onrender.com/api/filter';

    async function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
    
        const requestBody = {
            Location: Location ? Location : undefined,
            Price: Price ? Price : undefined,  
            Bedrooms: Bedrooms ? Bedrooms : undefined,
            Bathrooms: Bathrooms ? Bathrooms : undefined,
            Type: Type ? Type : undefined,
            Amenities: Amenities.length > 0 ? Amenities : undefined,
            Size: Size ? Size : undefined,
            Status: Status ? Status : undefined,
        };
    
        console.log('Request Body:', requestBody); 
    
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            });
    
            if (!response.ok) {
                throw new Error('Failed to fetch properties.');
            }
    
            const data = await response.json();
            if (data.data && data.data.length > 0) {
                setProperties(data.data);

                console.log(data.data)
            } else {
                //Not able to fetch..
                setProperties([]);
                setError('No properties found for the given criteria.');
            }
        } catch (error) {
            setError('Unable to fetch properties, please try again later.');
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }
    const handleAmenityChange = (Amenities) => {
        
        setAmenities((prev) => 
            prev.includes(Amenities) ? prev.filter(a => a !== Amenities) : [...prev, Amenities]
        );
    };

    return (
        <>
            <div className="search-bar">
                <form onSubmit={handleSubmit}>
                    <h1>Search Properties</h1>
                    {/* Search Location */}
                    <input
                        type="text"
                        placeholder="Search Location"
                        value={Location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                    
                    {/* Property Type */}
                    <select value={Type} onChange={(e) => setType(e.target.value)}>
                        <option value="" disabled>Property Type</option>
                        <option value="Apartment">Apartment</option>
                        <option value="House">House</option>
                        <option value="Office">Office</option>
                        <option value="Studio">Studio</option>
                    </select>

                    {/* Status */}
                    <select value={Status} onChange={(e) => setStatus(e.target.value)}>
                        <option value="" disabled>Status</option>
                        <option value="Sold">Sold</option>
                        <option value="Available">Available</option>
                        <option value="Pending">Pending</option>
                    </select>

                    {/* Price (Min) */}
                    <input
                        type="number"
                        placeholder="Price (Min)"
                        value={Price}
                        onChange={(e) => setPrice(e.target.value)}
                    />

                    {/* Bedrooms */}
                    <input
                        type="number"
                        placeholder="Bedrooms"
                        value={Bedrooms}
                        onChange={(e) => setBedrooms(e.target.value)}
                    />

                    {/* Bathrooms */}
                    <input
                        type="number"
                        placeholder="Bathrooms"
                        value={Bathrooms}
                        onChange={(e) => setBathrooms(e.target.value)}
                    />

                    {/* Size (sq ft) */}
                    <input
                        type="number"
                        placeholder="Size (sq ft)"
                        value={Size}
                        onChange={(e) => setSize(e.target.value)}
                    />

                    {/* Amenities Section */}
                    <div className="amenities-section">
                        <p><strong>Amenities:</strong></p>
                        <label>
                            <input 
                                type="checkbox" 
                                value="pool" 
                                checked={Amenities.includes('pool')} 
                                onChange={() => handleAmenityChange('pool')} 
                            /> Pool
                        </label>
                        <label>
                            <input 
                                type="checkbox" 
                                value="garden" 
                                checked={Amenities.includes('garden')} 
                                onChange={() => handleAmenityChange('garden')} 
                            /> Garden
                        </label>
                        
                        <label>
                            <input 
                                type="checkbox" 
                                value="gym" 
                                checked={Amenities.includes('gym')} 
                                onChange={() => handleAmenityChange('gym')} 
                            /> Gym
                        </label>
                    </div>

                    {/* Search Button */}
                    <button type="submit" className="search-button" disabled={isLoading}>
                        {isLoading ? 'Loading...' : 'Search'}
                    </button>
                </form>
            </div>

            {error && <div className="error">{error}</div>}

            {/* Render fetched properties */}
            {Array.isArray(properties) && properties.length > 0 && (
                <div className="property-list">
                    {properties.map((property) => (
                        <div key={property._id} className="property-card">
                            <img src={property.Image_URL} alt={property.Title} />
                            <h3>{property.Title}</h3>
                            <p><strong>Location:</strong>{property.Location}</p>
                            <p><strong>Price:</strong> Rs.{property.Price}</p>
                            <p><strong>Bedrooms:</strong> {property.Bedrooms}</p>
                            <p><strong>Bathrooms:</strong> {property.Bathrooms}</p>
                            <p><strong>Amenities:</strong> {Array.isArray(property.Amenities) ? property.Amenities.join(', ') : 'N/A'}</p>
                            <p><strong>Square Footage:</strong> {property.Size} sq. ft.</p>
                            <p><strong>Status:</strong>{property.Status}</p>
                        </div>
                    ))}
                </div>
            )}
            <CompareTool/>
        </>
    );
};
