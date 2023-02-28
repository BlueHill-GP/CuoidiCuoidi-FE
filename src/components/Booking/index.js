import React from 'react';
import './BookingPage.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <img src="avatar.jpg" alt="Avatar" className="avatar" />
            <h2 className="name">John Doe</h2>
            <div className="rating">
                <span className="stars">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
                <span className="count">(100)</span>
            </div>
            <button className="btn btn-booking">Booking</button>
            <button className="btn btn-calendar">Calendar</button>
        </div>
    );
};

const PackageDetails = () => {
    return (
        <div className="package-details">
            <h2 className="title">Standard Package</h2>
            <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed purus sed ante sollicitudin tincidunt eu a nulla. Fusce sit amet leo vitae enim facilisis auctor non sed turpis.</p>
            <div className="features">
                <ul>
                    <li>10 photos</li>
                    <li>1 hour of shooting</li>
                    <li>1 location</li>
                    <li>High resolution photos</li>
                </ul>
            </div>
            <div className="price">$100</div>
        </div>
    );
};

const ActionButtons = ({ onAccept, onWait }) => {
    return (
        <div className="action-buttons">
            <button className="btn btn-accept" onClick={onAccept}>Accept</button>
            <button className="btn btn-wait" onClick={onWait}>Wait</button>
        </div>
    );
};

const BookingPage = () => {
    const handleAccept = () => {
        console.log('Accepted!');
    };

    const handleWait = () => {
        console.log('Waiting...');
    };

    return (
        <div className="booking-page">
            <Sidebar />
            <div className="main-content">
                <PackageDetails />
                <div className="user-info">
                    <h2 className="name">Jane Doe</h2>
                    <p className="time">10:00 AM - 11:00 AM</p>
                    <p className="address">123 Main St, Anytown USA</p>
                </div>
                <ActionButtons onAccept={handleAccept} onWait={handleWait} />
            </div>
        </div>
    );
};

export default BookingPage;