import React, { useState, useEffect } from 'react';
import '../../Styles/CompareTool/compareTool.css';

export const CompareTool = ({ compProperties }) => {
  const [selectedProperties, setSelectedProperties] = useState([]);


  useEffect(() => {
    setSelectedProperties(compProperties);
  }, [compProperties]);

  return (
    <div className="compare-tool">
      <h1>Compare Properties</h1>

      {/* Display Selected Properties in Comparison Table */}
      {selectedProperties.length >= 2 ? (
        <div className="compare-container">
          <h2>Comparison Table</h2>
          <div className="comparison-table">
            {/* Table Header with Property Titles */}
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
      ) : (
        <div className="alert">
          <p>Please select at least two properties to compare.</p>
        </div>
      )}
    </div>
  );
};
