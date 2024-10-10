import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [statusMessage, setStatusMessage] = useState('');

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Validate email format
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if email is valid
        if (!isValidEmail(formData.email)) {
            setStatusMessage('Please enter a valid email address.');
            return;
        }

        try {
            // Send POST request with form data in the body
            // eslint-disable-next-line no-unused-vars
            const response = await axios.post('http://localhost:4000/contact', formData);
            setStatusMessage('Thank you! Your message has been sent successfully.');
        } catch (error) {
            console.error('Error submitting the form:', error);
            setStatusMessage('An error occurred while submitting the form. Please try again later.');
        }

        // Clear the form after submission
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div>
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>

            {statusMessage && <p>{statusMessage}</p>}
        </div>
    );
};

export default Contact;
