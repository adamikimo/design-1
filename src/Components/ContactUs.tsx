// imports
import React from 'react';
import '../styles/ContactUs.css';
import Contact_Us_Img from '../assets/contact-us-img.png';

// component
const ContactUs: React.FC = () => {
    // JSX
    return (
        // contact us container
        <div
            className='ContactUs'
        >
            {/* contact us form */}
            <div 
                className="contact-us-form"
            >
                {/* contact us title */}
                <div 
                    className="contact-us-title"
                >
                    Contact form
                </div>
                <label 
                    htmlFor="name"
                >
                    Name
                </label>
                <input 
                    type="text" 
                    name="name"
                    id="name"
                />
                <label 
                    htmlFor="email"
                >
                    Email address
                </label>
                <input 
                    type="email" 
                    name="email"
                    id="email"
                />
                <label 
                    htmlFor="message"
                >
                    Message
                </label>
                <textarea 
                    name="message" 
                    id="message" 
                />
                <button>
                    Envoyez
                </button>
            </div>
            {/* contact us img container */}
            <div 
                className="contact-us-img"
            >
                {/* contact us img */}
                <img 
                    src={Contact_Us_Img} 
                    alt="" 
                    width={200}
                    height={270}
                />
            </div>
        </div>
    )
}

export default ContactUs;