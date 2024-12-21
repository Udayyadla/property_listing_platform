import '../../Styles/Home/Home.css'
import { Link } from 'react-router-dom'; 
import { ImageCorousel } from '../InquiryForm/ImageCorousel';

export const Home=()=>{
    return (
        <>
            <div className="home-main">


                {/* Section 1 here:*/}
                <div className="home-s1">
                <img
                    src={
                    "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyaminmellish-186077.jpg&fm=jpg"
                    }
                    alt="Main Property"
                    className="home-s1-img"
                />
                    <h3 className="home-s1-h3">Discover your Dream Home with Us</h3>
                    <h1>Find the Perfect <br/> Property for your<br/> Lifestyle</h1>

                    <Link to="/searchForm"> 
                        <button className="home-s1-btn">START SEARCHING</button>
                    </Link>
                </div>


                {/* Section 2 here: */}
                <div className="home-s2">
                    <div className="s2-container_1">
                        <h3>What We Do</h3>
                        <p>Simplifying the journey of buying, selling, and renting properties. 
                            Our expert team <br/>provides comprehensive real estate solutions 
                            tailored to your needs 
                        </p>
                    </div>
                    
                    <div className="s2-container_2">

                        <div className="card1">
                           
                            
                            <h4>Property Sales</h4>
                            <p>Find your dream home with Real Estate 
                                - our expert team will guide you through the process 
                                 and ensure a smooth transaction.</p>
                        </div>

                        <div className="card1">
                        
                        
                            <h4>Property Rentals</h4>
                            <p>Find your dream rental property with Real Estate,
                                <br/> offering a variety of options to suit 
                                <br/>your needs and preferences.</p>
                        </div>

                        <div className="card1">
                       
                        
                            <h4>Property Management</h4>
                            <p>Trust Real Estate to handle the day-to-day 
                                <br/>management of your property, maximizing 
                                <br/>its value and minimizing your stress.</p>
                        </div>
                        
                        <div className="card1">
                    
                        
                            <h4>Lucrative Investments</h4>
                            <p>Find your dream home with Real Estate 
                                <br/>- our expert team will guide you through the process 
                                <br/> and ensure a smooth transaction.</p>
                        </div>
                    </div>
                </div>
                <ImageCorousel/>


                {/* Section 3 here: */}
                <div className="home-s3">
                    <div className="s3-container_1">
                        <h3>Featured Properties</h3>
                        <p>Discover our hand-picked selection of top-notch properties with outstanding features,
                            <br/>guaranteed to meet your real estate needs and exceed your expectations.
                        </p>
                    </div>


                    <div className="s3-container_2">
                        <div className="card2">

                            <img className="card2-image"
                             src="https://images.unsplash.com/photo-1567975722683-29cf4e918c9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ2fHx8ZW58MHx8fHx8" 
                             alt="property image" 
                             />
                            <h4 className="card2-subtitle">Apartment - Queens</h4>
                            <h3 className="card2-title">Modern Stylish Apartment</h3>
                            <p className="card2-desc">Description of the property goes here.</p>
                            <p className="card2-price">Rs.880,000</p>
                        </div>

                        <div className="card2">
                            <img className="card2-image"
                             src="https://plus.unsplash.com/premium_photo-1693493439424-eb93e53b490a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ1fHx8ZW58MHx8fHx" 
                             alt="property image" 
                             />
                            <h4 className="card2-subtitle">Apartment - Queens</h4>
                            <h3 className="card2-title">Contemporary Apartments</h3>
                            <p className="card2-desc">Description of the property goes here.</p>
                            <p className="card2-price">Rs.300,000</p>
                        </div>

                        <div className="card2">
                            <img className="card2-image"
                             src="https://images.unsplash.com/photo-1550945888-ce50c03c8aeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdXNpbmd8ZW58MHx8MHx8fDA%3D" 
                             alt="property image" 
                             />
                            <h4 className="card2-subtitle">Apartment - Queens</h4>
                            <h3 className="card2-title">Suburban Single-Family Homes</h3>
                            <p className="card2-desc">Description of the property goes here.</p>
                            <p className="card2-price">Rs.550,000</p>
                        </div>
                    </div>
                </div>


                {/* Section 4 here: */}
                <div className="home-s4">
                    <div className="s4-container_1">
                        <h1>Read from clients who have found
                             the perfect place where they can create...
                        </h1>

                        <p>Discover testimonials from satisfied clients who have found 
                            their dream properties with Real Estate, 
                            the trusted experts in helping you find the perfect place to call home.
                        </p>

                        <button>MORE TESTIMONIALS</button>
                    </div>
                    <div className="s4-container_2">
                        

                        <div className="card3">
                            <img
                                src="https://static.vecteezy.com/system/resources/thumbnails/009/663/927/small/5-star-rating-review-star-transparent-free-png.png"
                                alt="image"
                            />
                            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Mauris id convallis neque. Nam scelerisque placerat orci.
                                 Maecenas at pulvinar dui. In fermentum, lectus sed tincidunt ornare, 
                                 arcu ex convallis sapien, quis vestibulum libero tellus quis nisl.”</p>
                            <h4>User012</h4>
                        </div>
                        <div className="card3">
                            <img
                                src="https://static.vecteezy.com/system/resources/thumbnails/009/663/927/small/5-star-rating-review-star-transparent-free-png.png"
                                alt="image"
                            />
                            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Mauris id convallis neque. Nam scelerisque placerat orci.
                                 Maecenas at pulvinar dui. In fermentum, lectus sed tincidunt ornare, 
                                 arcu ex convallis sapien, quis vestibulum libero tellus quis nisl.”</p>
                            <h4>User012</h4>
                        </div>
                    </div>
                </div>
                

                {/* Section 5 here: */}
                <div className="home-s5">
                    <div className="s5-container_1">
                        
                        <img
                            src="https://images.unsplash.com/photo-1523562457378-685782b382a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dG93bnxlbnwwfHwwfHx8MA%3D%3D"
                            alt="image"
                        />
                    </div>
                    <div className="s5-container_2">
                        <h1>Connecting people with perfect homes is our passion.
                        </h1>

                        <p>With a genuine passion for helping people find their dream homes,
                             we are dedicated to connecting buyers and sellers
                              in the real estate market. Trust us to make your home buying 
                              or selling experience seamless and satisfying.
                        </p>

                        <button>READ MORE</button>
                    </div>
                </div>
            </div>
        </>
    )
}