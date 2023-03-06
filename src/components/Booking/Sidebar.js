import React from "react";

function Sidebar(props) {
    return (
        <div className="sidebar">
            <img className="avatar" src={props.avatarUrl} alt="Avatar" />
            <h2 className="name">{props.name}</h2>
            <div className="rating">
                <div className="stars">★★★★★</div>
                <div className="count">{props.ratingCount} đánh giá</div>
            </div>
            <button className="btn btn-booking">Booking</button>
            <button className="btn btn-calendar">Calendar</button>
        </div>
    );
}

export default Sidebar;