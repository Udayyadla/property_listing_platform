import '../../Styles/Properties/Hero.css';
import { Features } from './Features';
import { CompareTool } from '../CompareTool/CompareTool';

export const Hero = () => {
    return (
        <div className='container'>
            <div className="hero-section">
                <div className="hero-content">
                    <p>Properties</p>
                    <h3>Looking to Buy, Sell, Rent, Invest or Manage?</h3>
                </div>
            </div>

            {/* Features section */}
            <br/>
            <Features />
        </div>

    );
};
