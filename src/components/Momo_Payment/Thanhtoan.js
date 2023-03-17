import React from 'react';
import OrderInfo from '../Momo_Payment/OrderInfo';
import PaymentMethod from '../Momo_Payment/PaymentMethod';
import '/home/linhanna/IdeaProjects/CuoidiCuoidi-FE/src/assets/css/Momo_Payment.css';

function Thanhtoan() {
    return (
        <div>
                <h1>Thanh toán đơn hàng</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <OrderInfo />
                    </div>
                    <div className="col-md-6">
                        <PaymentMethod />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Thanhtoan;