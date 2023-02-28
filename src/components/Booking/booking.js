import React from 'react';
import '/home/linhanna/IdeaProjects/CuoidiCuoidi-FE/src/assets/css/Booking.css';

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

function ActionButtons(props) {
    return (
        <div className="action-buttons">
            <button className="btn btn-accept" onClick={props.onAccept}>
                Đồng ý
            </button>
            <button className="btn btn-wait" onClick={props.onWait}>
                Đợi
            </button>
        </div>
    );
}

function booking() {
    return (
        <div className="booking-page">
            <Sidebar
                avatarUrl="https://i.pravatar.cc/150?img=3"
                name="John Doe"
                ratingCount={5}
            />
            <div className="main-content">
                <PackageDetails
                    title="Gói ảnh cưới"
                    description="Gói ảnh cưới gồm 2 bộ ảnh trong studio và ngoại cảnh, chụp trong 1 ngày. Chất lượng ảnh cao, chỉnh sửa tinh tế và đẹp nhất."
                    features={[
                        '2 bộ ảnh trong studio và ngoại cảnh',
                        'Chụp trong 1 ngày',
                        'Chất lượng ảnh cao, chỉnh sửa tinh tế và đẹp',
                    ]}
                    price={5000000}
                />
                <div className="user-info">
                    <div className="info-column">
                        <div className="info-row">
                            <div className="info-label">Tên</div>
                            <div className="info-value">Nguyễn Thị Hương</div>
                        </div>
                        <div className="info-row">
                            <div className="info-label">Thời gian</div>
                            <div className="info-value">14:00 - 16:00 ngày 30/04/2023</div>
                        </div>
                        <div className="info-row">
                            <div className="info-label">Địa chỉ</div>
                            <div className="info-value">123 Đường Nguyễn Văn Linh, Quận 7, TP.HCM</div>
                        </div>
                    </div>
                    <div className="info-column">
                        <img className="package-image" src="https://via.placeholder.com/400x300" alt="Package" />
                    </div>
                    <div className="info-column">
                        <ActionButtons onAccept={() => console.log('Accepted')} onWait={() => console.log('Wait')} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default booking ;
