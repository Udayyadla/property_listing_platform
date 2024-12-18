import '../../Styles/Properties/Features.css';
import asset1 from '../../assets/Properties_assets/asset 1.jpeg';
import asset2 from '../../assets/Properties_assets/asset 2.jpeg';
import asset3 from '../../assets/Properties_assets/asset 3.jpeg';
import asset4 from '../../assets/Properties_assets/asset 4.jpeg';
import asset5 from '../../assets/Properties_assets/asset 5.jpeg';
import asset6 from '../../assets/Properties_assets/asset 6.jpeg';

export const Features = () => {
    return (
        <div>
            <div className="featured-container">
                <div className='features-desciption'>
                    <h3>Featured Properties</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fermentum tempus elit, vel pellentesque orci tincidunt eu. Sed venenatis tempus ipsum.</p>
                </div>

                <div className='card-container'>
                    <div className='card'>
                        <div className="image-container">
                            <img src={asset1} alt="property1" />
                        </div>
                        <p>Apartment - Queens</p>
                        <h3>Modern Stylish Apartment</h3>
                        <p>Discover the epitome of contemporary living in our sleek and chic modern stylish apartments.</p>
                        <p>$150,000</p>
                    </div>
                    <div className='card'>
                        <div className="image-container">
                            <img src={asset2} alt="property1" />
                        </div>
                        <p>Apartment - Queens</p>
                        <h3>Contemporary Apartments</h3>
                        <p>Experience the perfect blend of sophistication and urban living in our cutting-edge contemporary apartments.</p>
                        <p>$150,000</p>
                    </div>
                    <div className='card'>
                        <div className="image-container">
                            <img src={asset3} alt="property1" />
                        </div>
                        <p>Apartment - Queens</p>
                        <h3>Suburban Single-Family Homes</h3>
                        <p>Embrace the idyllic charm and tranquility of suburban living in our spacious and welcoming single-family homes.</p>
                        <p>$150,000</p>
                    </div>
                    <div className='card'>
                        <div className="image-container">
                            <img src={asset4} alt="property1" />
                        </div>
                        <p>Apartment - Queens</p>
                        <h3>Luxury Estates</h3>
                        <p>Experience opulence and sophistication with our exclusive collection of luxury estate properties.</p>
                        <p>$150,000</p>
                    </div>
                    <div className='card'>
                        <div className="image-container">
                            <img src={asset5} alt="property1" />
                        </div>
                        <p>Apartment - Queens</p>
                        <h3>Townhouses</h3>
                        <p>Enjoy modern living and convenience with our stylish and well-designed townhouse residences.</p>
                        <p>$150,000</p>
                    </div>
                    <div className='card'>
                        <div className="image-container">
                            <img src={asset6} alt="property1" />
                        </div>
                        <p>Apartment - Queens</p>
                        <h3>Vacation Homes</h3>
                        <p>Find your ideal getaway with our range of vacation homes, perfect for relaxation and creating lasting memories.</p>
                        <p>$150,000</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
