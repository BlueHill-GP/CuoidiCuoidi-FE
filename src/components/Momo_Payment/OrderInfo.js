import React from 'react';
import './OrderInfo.css';

function OrderInfo() {
    return (
        <div className="order-info">
            <h3>Thông tin đơn hàng</h3>
            <div className="don-hang">
                <p>Sản phẩm 1</p>
                <p>200.000đ</p>
            </div>
            <div className="don-hang">
                <p>Sản phẩm 2</p>
                <p>300.000đ</p>
            </div>
            <div className="tong-tien">
                <p>Tổng tiền:</p>
                <p>500.000đ</p>
            </div>
        </div>
    );
}

export default OrderInfo;