// imports
import React from 'react';
import '../styles/Subscribe.css';

// component
const Subscribe: React.FC = () => {
    // JSX
    return (
        // the subscription parent element
        <div
            className='Subscribe'
        >
            {/* the subscription container */}
            <div 
                className="subscribe-container"
            >
                {/* the subscription header */}
                <div 
                    className="subscribe-header"
                >
                    {/* the subscription heading text */}
                    <div 
                        className="subscribe-heading"
                    >
                        Subscribe to the news-letter to recieve latest informtion about our services
                    </div>
                    {/* the subscription text */}
                    <div 
                        className="subscribe-text"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices aliquam sit vestibulum, duis nunc, velit. Bibendum egestas eleifend lacus proin ultrices ut tristique. Vitae phasellus mauris lectus pharetra dolor, hendrerit dictum
                    </div>
                </div>
                {/* the subscription form */}
                <div
                    className="subscribe-form-container"
                >
                    {/* the input */}
                    <input 
                        type="text"
                        placeholder="input your email address for best offers" 
                    />
                    {/* the button */}
                    <button>
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Subscribe;