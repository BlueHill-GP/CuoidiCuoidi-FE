import React from 'react';
import OrderInfo from './OrderInfo';
import PaymentMethod from './PaymentMethod';
import './Thanhtoan.css';
import './OrderInfo.css';
import './PaymentMethod.css';

function Thanhtoan() {
    return (
        <div>
            <header>
                <h1>Thanh toán đơn hàng</h1>
            </header>
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