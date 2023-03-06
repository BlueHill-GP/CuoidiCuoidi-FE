import React from "react";

function PackageDetails(props) {
    return (
        <div className="package-details">
            <h1 className="title">{props.title}</h1>
            <p className="description">{props.description}</p>
            <div className="features">
                <ul>
                    {props.features.map((feature, index) => (
                        <li key={index} className="feature">
                            <i className="fas fa-check"></i>
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="price">{props.price}đ</div>
        </div>
    );
}

export default PackageDetails;