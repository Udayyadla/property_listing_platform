import React, { useState, useEffect, useMemo } from "react";
import '../../Styles/Properties/Features.css';
import { useNavigate } from "react-router-dom";

export const Features = () => {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [infiniteScroll, setInfiniteScroll] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    let navigate = useNavigate();

    // Fetch properties from the API
    const fetchProperties = async (page, append = false) => {
        try {
            const response = await fetch(`https://property-listing-platform.onrender.com/api/getProps?page=${page}&limit=6`);
            if (!response.ok) {
                throw new Error(`HTTP Error! Status: ${response.status}`);
            }
            const data = await response.json();
            setProperties(prev => append ? [...prev, ...data] : data);
            if (data.length < 6) {
                setHasMore(false);
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const memoizedProperties = useMemo(() => properties, [properties]);

    useEffect(() => {
        if (!infiniteScroll) {
            setLoading(true);
            fetchProperties(currentPage);
        }
    }, [currentPage, infiniteScroll]);

    useEffect(() => {
        if (infiniteScroll) {
            const handleScroll = () => {
                if (
                    window.innerHeight + document.documentElement.scrollTop >=
                        document.documentElement.offsetHeight - 100 &&
                    hasMore &&
                    !loading
                ) {
                    setLoading(true);
                    setCurrentPage(prevPage => {
                        const nextPage = prevPage + 1;
                        fetchProperties(nextPage, true);
                        return nextPage;
                    });
                }
            };

            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }
    }, [infiniteScroll, hasMore, loading]);

    const handleNextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const handlePreviousPage = () => {
        setCurrentPage(prevPage => (prevPage > 1 ? prevPage - 1 : 1));
    };

    const toggleMode = () => {
        setInfiniteScroll(prev => !prev);
        setCurrentPage(1);
        setProperties([]);
        setHasMore(true);
    };

    if (loading && properties.length === 0) {
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
        navigate(`/propertiesDetails/${id}`);
    }

    async function handleChangeSort(e) {
        let value = e.target.value;
        try {
            const response = await fetch(`https://property-listing-platform.onrender.com/api/getProps?page=${currentPage}&limit=6&sortBy=Price&sortOrder=${value}`);
            if (!response.ok) {
                throw new Error(`HTTP Error! Status: ${response.status}`);
            }
            const data = await response.json();
            setProperties(data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <div className="features">
                <h1>Property Listings</h1>
                <div className="ft-sort-page">
                <div>
                    <select onChange={handleChangeSort}>
                        <option value="">Sort By Price</option>
                        <option value="desc">High To Low</option>
                        <option value="asc">Low To High</option>
                    </select>
                </div>
                <div>
                    <button onClick={toggleMode} className="infinte-scrolling">
                        {infiniteScroll ? "Switch to Pagination" : "Switch to Infinite Scroll"}
                    </button>
                </div>
                </div>
                <div className="property-grid">
                    {memoizedProperties.map((property) => (
                        <div className="property-card-1" key={property._id} onClick={() => handleNavigate(property._id)}>
                            <img
                                src={property.Image_URL}
                                alt={property.Title}
                                className="property-image"
                            />
                            <div className="property-status">
                                <span className={
                                    property.Status === "Available"
                                        ? "for-sale"
                                        : property.Status === "Pending"
                                            ? "for-pending"
                                            : "for-sold"
                                }>
                                    {property.Status}
                                </span>
                            </div>
                            <div className="property-details">
                                <h2>{property.Title}</h2>
                                <p>{property.Location}</p>
                                <p><strong>Price:</strong> ₹{property.Price}</p>
                                <div className="property-specs">
                                    <span>{property.Size} Sqft</span>
                                    <span>{property.Bedrooms} Bedroom</span>
                                    <span>{property.Bathrooms} Bathroom</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {!infiniteScroll && (
                    <div className="pagination">
                        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                            Previous
                        </button>
                        <span>Page {currentPage}</span>
                        <button onClick={handleNextPage} disabled={!hasMore}>Next</button>
                    </div>
                )}
                {loading && <p>Loading more properties...</p>}
            </div>
        </div>
    );
};
