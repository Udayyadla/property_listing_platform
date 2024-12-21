import React, { useState, useEffect, useRef } from "react";
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

    // Track fetched properties
    const [properties, setProperties] = useState([]);
    const [error, setError] = useState(null);

    // Track selected properties for comparison
    const [compProperties, setCompProperties] = useState([]);

    // Track visibility of checkboxes
    const [isCheckboxVisible, setIsCheckboxVisible] = useState(false);

    const API_URL = 'https://property-listing-platform.onrender.com/api/filter';

    // Debounce delay (e.g., 500ms)
    const debounceTimeout = useRef(null);

    const fetchProperties = async () => {
        setIsLoading(true);
        setError(null);

        const requestBody = {
            Location: Location || undefined,
            Price: Price ? parseInt(Price) : undefined,
            Bedrooms: Bedrooms ? parseInt(Bedrooms) : undefined,
            Bathrooms: Bathrooms ? parseInt(Bathrooms) : undefined,
            Type: Type || undefined,
            Amenities: Amenities.length > 0 ? Amenities : undefined,
            Size: Size ? parseInt(Size) : undefined,
            Status: Status || undefined,
        };

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
            } else {
                setProperties([]);
                setError('No properties found for the given criteria.');
            }
        } catch (error) {
            setError('Unable to fetch properties, please try again later.');
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleAmenityChange = (amenity) => {
        setAmenities(prev => 
            prev.includes(amenity) ? prev.filter(a => a !== amenity) : [...prev, amenity]
        );
    };

    const handleCheckboxChange = (property, isChecked) => {
        setCompProperties(prev => {
            if (isChecked) {
                return [...prev, property];
            } else {
                return prev.filter(p => p._id !== property._id);
            }
        });
    };

    const toggleCheckboxVisibility = () => {
        setIsCheckboxVisible(prev => !prev);
    };

    const handleSearchClick = () => {
        if (debounceTimeout.current) {
            clearTimeout(debounceTimeout.current); // Clear the previous timeout
        }

        debounceTimeout.current = setTimeout(() => {
            fetchProperties(); // Execute the search after the debounce delay
        }, 500); // 500ms delay
    };

    useEffect(() => {
        if (!Location && !Price && !Bedrooms && !Bathrooms && !Type && !Size && !Status && Amenities.length === 0) {
            setProperties([]); // Clear results if no filters
        }
    }, [Location, Price, Bedrooms, Bathrooms, Type, Amenities, Size, Status]);

    return (
        <>
            <div className="search-bar">
                <form>
                    <h1>Search Properties</h1>
                    <input
                        type="text"
                        placeholder="Search Location"
                        value={Location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                    <select value={Type} onChange={(e) => setType(e.target.value)}>
                        <option value="" disabled>Property Type</option>
                        <option value="Apartment">Apartment</option>
                        <option value="House">House</option>
                        <option value="Office">Office</option>
                    </select>
                    <select value={Status} onChange={(e) => setStatus(e.target.value)}>
                        <option value="" disabled>Status</option>
                        <option value="Sold">Sold</option>
                        <option value="Available">Available</option>
                        <option value="Pending">Pending</option>
                    </select>
                    <input
                        type="number"
                        placeholder="Price (Min)"
                        value={Price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Bedrooms"
                        value={Bedrooms}
                        onChange={(e) => setBedrooms(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Bathrooms"
                        value={Bathrooms}
                        onChange={(e) => setBathrooms(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Size (sq ft)"
                        value={Size}
                        onChange={(e) => setSize(e.target.value)}
                    />
                    <div className="amenities-section">
                        <p><strong>Amenities:</strong></p>
                        <label>
                            <input 
                                type="checkbox" 
                                value="Pool" 
                                checked={Amenities.includes('Pool')} 
                                onChange={() => handleAmenityChange('Pool')} 
                            /> Pool
                        </label>
                        <label>
                            <input 
                                type="checkbox" 
                                value="Garden" 
                                checked={Amenities.includes('Garden')} 
                                onChange={() => handleAmenityChange('Garden')} 
                            /> Garden
                        </label>
                        <label>
                            <input 
                                type="checkbox" 
                                value="Gym" 
                                checked={Amenities.includes('Gym')} 
                                onChange={() => handleAmenityChange('Gym')} 
                            /> Gym
                        </label>
                        <label>
                            <input 
                                type="checkbox" 
                                value="Garage" 
                                checked={Amenities.includes('Garage')} 
                                onChange={() => handleAmenityChange('Garage')} 
                            /> Garage
                        </label>
                    </div>
                    <button type="button" className="search-button" onClick={handleSearchClick} disabled={isLoading}>
                        {isLoading ? 'Loading...' : 'Search'}
                    </button>
                </form>
            </div>

            <div className="compare-button-container">
                <button className="compare-button" onClick={toggleCheckboxVisibility}>
                    {isCheckboxVisible ? 'Comparing in Progress' : 'Compare'}
                </button>
            </div>

            {error && <div className="error">{error}</div>}

            {/* Render fetched properties */}
            {Array.isArray(properties) && properties.length > 0 && (
                <div className="property-list">
                    {properties.map((property) => (
                        <div key={property._id} className="property-card">
                            {isCheckboxVisible && (
                                <input 
                                    type="checkbox"
                                    id="property-card-checkbox"
                                    style={{ width: '25px', height: '25px' }}
                                    onChange={(e) => handleCheckboxChange(property, e.target.checked)}
                                />
                            )}
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

            <CompareTool compProperties={compProperties} />
        </>
    );
};
