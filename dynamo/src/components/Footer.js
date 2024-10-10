import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-white text-center py-3">
            <div className="container">
                <p>&copy; 2024 My Complete Website. All rights reserved.</p>
                <p>
                    <a className="text-white" href="/contact">Contact Us</a> | <a className="text-white" href="/privacy">Privacy Policy</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
