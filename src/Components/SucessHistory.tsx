// imports
import React from 'react';
import '../styles/SuccessHistory.css';
import Top from './Top';

// component
const SucessHistory: React.FC = () => {
    // JSX
    return (
        // success history section container
        <div
            className='SucessHistory'
        >
            {/* Headings */}
            <Top 
                stHeading="Success History"
                ndHeading="Do you know why we are the Best?"
                rdHeading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci fusce blandit facilisis enim potenti vulputate quisque. Nunc suspendisse urna lobortis quisque pellentesque tempor, pellentesque tortor. Est, vitae volutpat ullamcorper enim."
                variant="dark"
            />
            {/* success history section bottom container part */}
            <div 
                className="successHistory-bottom"
            >
                {/* success history item container */}
                <div 
                    className="successHistory-item"
                >
                    {/* success history item title */}
                    <div 
                        className="successHistory-item-title"
                    >
                        We are trusted by
                    </div>
                    {/* success history item body */}
                    <div 
                        className="successHistory-item-body"
                    >
                        {/* success history icon */}
                        <img 
                            src="/assets/man.png" 
                            alt="" 
                        />
                        {/* success history item body amount */}
                        <span 
                            className="successHistory-item-body-amount"
                        >
                            5K+
                        </span>
                    </div>
                </div>
                {/* success history item container */}
                <div 
                    className="successHistory-item"
                >
                    {/* success history item title */}
                    <div 
                        className="successHistory-item-title"
                    >
                        Project realized
                    </div>
                    {/* success history item body */}
                    <div 
                        className="successHistory-item-body"
                    >
                        {/* success history icon */}
                        <img 
                            src="/assets/bag.png" 
                            alt="" 
                        />
                        {/* success history item body amount */}
                        <span 
                            className="successHistory-item-body-amount"
                        >
                            200+
                        </span>
                    </div>
                </div>
                {/* success history item container */}
                <div 
                    className="successHistory-item"
                >
                    {/* success history item title */}
                    <div 
                        className="successHistory-item-title"
                    >
                        Happy Clients
                    </div>
                    {/* success history item body */}
                    <div 
                        className="successHistory-item-body"
                    >
                        {/* success history icon */}
                        <img 
                            src="/assets/imgFrame.png" 
                            alt="" 
                        />
                        {/* success history item body amount */}
                        <span 
                            className="successHistory-item-body-amount"
                        >
                            600+
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SucessHistory;