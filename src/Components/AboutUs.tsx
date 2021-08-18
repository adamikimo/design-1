// imports
import React from 'react';
import about_us_img from '../assets/about-us-img.png';
import '../styles/AboutUs.css';

// component
const AboutUs: React.FC = () => {
    // JSX
    return (
        // about us container
        <div
            className='AboutUs'
        >
            {/* the container of the about us img */}
            <div 
                className="img-container-about-us"
            >
                {/* the yellow transparent box */}
                <div
                    className="yellow-box"
                >

                </div>
                {/* the about us img */}
                <img 
                    src={about_us_img}
                    alt="" 
                />
                {/* the red transparent box */}
                <div
                    className="red-box"
                >

                </div>
            </div>
            {/* about us text section */}
            <div 
                className="about-us-text-section"
            >
                <div>
                    {/* about us title */}
                    <div 
                        className="about-us-title"
                    >
                        About Us
                    </div>
                    {/* about us heading */}
                    <div 
                        className="heading-about-us"
                    >
                        Who are we and why we are?
                    </div>
                    {/* about us text */}
                    <div 
                        className="about-us-text"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices aliquam sit vestibulum, duis nunc, velit. Bibendum egestas eleifend lacus proin ultrices ut tristique. Vitae phasellus mauris lectus pharetra dolor, hendrerit dictum. Velit suscipit habitant laoreet aliquam viverra bibendum neque. Tortor scelerisque id ut egestas ac blandit.
                    </div>
                    {/* about us button */}
                    <button 
                        className="about-us-btn"
                    >
                        Read more
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;