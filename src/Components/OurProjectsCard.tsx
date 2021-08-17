// imports
import React from 'react';
import '../styles/OurProjectsCard.css';

// props interface
interface OurProjectsCardProps{
    img: string;
    id: string;
}

// component
const OurProjectsCard: React.FC<OurProjectsCardProps> = ({ id, img }) => {
    // JSX
    return (
        // card container
        <div
        className={`OurProjectsCard ${id}`}
        >
            {/* the img container */}
            <div 
                className="img-container"
            >
                {/* the img heading container */}
                <div 
                    className="img-head"
                >
                    {/* the left side of the img heading container */}
                    <div 
                        className="img-left"
                    >
                        <img 
                            style={{ margin: 5 }}
                            src="/assets/clock-time-icon.png" 
                            alt="" 
                        />
                        <div
                            className="date"
                        >
                            13/07/2021
                        </div>
                    </div>
                    {/* the right side of the img heading container */}
                    <div 
                        className="img-right-pos"
                    >
                        <img 
                            src="/assets/4ImgStack.png" 
                            alt="" 
                        />
                    </div>
                </div>
                {/* the main img in the card */}
                <img 
                    className="big-img"
                    src={img} 
                    alt="" 
                />
                {/* the footer of the img */}
                <div 
                    className="img-footer"
                >
                    <div 
                        className="img-footer-item"
                    >
                        <img 
                            src="/assets/imgFrameSmall.png" 
                            alt="" 
                        />
                        Author of publication
                    </div>
                    <div 
                        className="img-footer-item"
                    >
                        <img 
                            src="/assets/calender.png" 
                            alt="" 
                        />
                        Duration of project
                    </div>
                    <div 
                        className="img-footer-item"
                    >
                        <img 
                            src="/assets/dollar.png" 
                            alt="" 
                        />
                        6,000.00
                    </div>
                </div>
            </div>
            {/* the title of the card */}
            <div
                className="Heading"
            >
                Lorem ipsum dolor sit amet
            </div>
            <button>
                More details
            </button>
        </div>
    )
}

export default OurProjectsCard;