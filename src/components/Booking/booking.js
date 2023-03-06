import React from 'react';
import '/home/linhanna/IdeaProjects/CuoidiCuoidi-FE/src/assets/css/Booking.css';
import Sidebar from "./Sidebar";
import PackageDetails from "../Booking/PackageDetails";
import ActionButtons from "./ActionButtons";

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
