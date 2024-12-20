import React, { useState } from 'react';
import '../../Styles/CompareTool/compareTool.css';

const availableProperties = [
  {
    Title: 'Property 1',
    Image_URL: 'https://via.placeholder.com/150',
    Location: 'Location 1',
    Price: 500000,
    Bedrooms: 3,
    Bathrooms: 2,
    Amenities: ['Pool', 'Garage'],
  },
  {
    Title: 'Property 2',
    Image_URL: 'https://via.placeholder.com/150',
    Location: 'Location 2',
    Price: 700000,
    Bedrooms: 4,
    Bathrooms: 3,
    Amenities: ['Gym', 'Balcony'],
  },
  {
    Title: 'Property 3',
    Image_URL: 'https://via.placeholder.com/150',
    Location: 'Location 3',
    Price: 600000,
    Bedrooms: 3,
    Bathrooms: 2,
    Amenities: ['Garden', 'Pool'],
  },
  {
    Title: 'Property 4',
    Image_URL: 'https://via.placeholder.com/150',
    Location: 'Location 4',
    Price: 800000,
    Bedrooms: 5,
    Bathrooms: 4,
    Amenities: ['Garage', 'Garden'],
  },
  {
    Title: 'Property 5',
    Image_URL: 'https://via.placeholder.com/150',
    Location: 'Location 5',
    Price: 900000,
    Bedrooms: 6,
    Bathrooms: 5,
    Amenities: ['Pool', 'Gym'],
  },
];

export const CompareTool = () => {
  const [selectedProperties, setSelectedProperties] = useState([]);

  const handlePropertySelect = (property) => {
    if (selectedProperties.includes(property)) {
      setSelectedProperties(selectedProperties.filter((p) => p !== property));
    } else {
      if (selectedProperties.length < 4) {
        setSelectedProperties([...selectedProperties, property]);
      } else {
        alert('You can only select up to 4 properties for comparison.');
      }
    }
  };

  return (
    <div className="compare-tool">
      <h1>Compare Properties</h1>

      {/* Property Selection */}
      <div className="property-selection">
        <h2>Select Properties to Compare</h2>
        <div className="properties-list">
          {availableProperties.map((property, index) => (
            <div key={index} id="property-card">
              <input
                type="checkbox"
                checked={selectedProperties.includes(property)}
                onChange={() => handlePropertySelect(property)}
                disabled={selectedProperties.length >= 4 && !selectedProperties.includes(property)} // Disable checkbox if 4 properties are selected
              />
              <h3>{property.Title}</h3>
              <img src={property.Image_URL} alt={property.Title} />
              <p><strong>Location:</strong> {property.Location}</p>
              <p><strong>Price:</strong> Rs.{property.Price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Display Selected Properties in Comparison Table */}
      {selectedProperties.length >= 2 && (
        <div className="compare-container">
          <h2>Comparison Table</h2>
          <div className="comparison-table">
            {/* Table Header with Product Titles */}
            <div className="table-header">
              <div className="table-header-item-feature">Feature</div>
              {selectedProperties.map((property, index) => (
                <div key={index} className="table-header-item">{property.Title}</div>
              ))}
            </div>

            {/* Table Rows for Property Features */}
            {['Price', 'Bedrooms', 'Bathrooms', 'Location', 'Amenities'].map((feature, index) => (
              <div className="table-row" key={index}>
                <div className="table-row-header">{feature}</div>
                {selectedProperties.map((property, i) => (
                  <div key={i} className="table-row-item">
                    {feature === 'Price' && `Rs.${property.Price}`}
                    {feature === 'Bedrooms' && property.Bedrooms}
                    {feature === 'Bathrooms' && property.Bathrooms}
                    {feature === 'Location' && property.Location}
                    {feature === 'Amenities' && property.Amenities.join(', ')}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Alert for at least two properties */}
      {selectedProperties.length < 2 && (
        <div className="alert">
          <p>Please select at least two properties to compare.</p>
        </div>
      )}
    </div>
  );
};
