import React, { useState, useEffect, useMemo } from "react";
import '../../Styles/Properties/Features.css';
import { useNavigate } from "react-router-dom";

export const Features = () => {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    let navigate = useNavigate();

    // Fetch properties from the API
    const fetchProperties = async (page) => {
        try {
            const response = await fetch(`https://property-listing-platform.onrender.com/api/getProps?page=${page}&limit=6`);
            if (!response.ok) {
                throw new Error(`HTTP Error! Status: ${response.status}`);
            }
            const data = await response.json();
            setProperties(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const memoizedProperties = useMemo(() => properties, [properties]);

    useEffect(() => {
        setLoading(true);
        fetchProperties(currentPage);
    }, [currentPage]);

    const handleNextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const handlePreviousPage = () => {
        setCurrentPage(prevPage => (prevPage > 1 ? prevPage - 1 : 1));
    };

    if (loading) {
        return (
            <div className="loading-container">
                <div className="loading-spinner"></div>
                <p>Loading properties, please wait...</p>
            </div>
        );
    }
    
    if (error) {
        return (
            <div className="error-container">
                <p>{error}</p>
            </div>
        );
    }
    

    function handleNavigate(id) {
        navigate(`/propertiesDetails/${id}`)
    }

    return (
        <div className="features">
            <h1>Property Listings</h1>
            <div className="property-grid">
                {memoizedProperties.map((property) => (
                    <div className="property-card" key={property._id} onClick={() => handleNavigate(property._id)}>
                        <img
                            src={property.Image_URL}
                            alt={property.Title}
                            className="property-image"
                        />
                        <h2>{property.Title}</h2>
                        <p>
                            <strong>Location:</strong> {property.Location}
                        </p>
                        <p>
                            <strong>Status:</strong> {property.Status}
                        </p>
                    </div>
                ))}
            </div>
            <div className="pagination">
                <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                    Previous
                </button>
                <span>Page {currentPage}</span>
                <button onClick={handleNextPage} disabled={currentPage === 8}>Next</button>
            </div>
        </div>
    );
};
