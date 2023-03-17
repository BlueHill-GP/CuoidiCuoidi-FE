import React from 'react';
import ProductList from '../components/Momo_Payment/ProductList';
import OrderInfo from '../components/Momo_Payment/OrderInfo';
import PaymentMethod from '../components/Momo_Payment/PaymentMethod';
import '../assets/css/Momo_Payment.css';

function MomoPaymentPage() {
    return (
        <div>
            <div className="container">
                <div className="left-column">
                    <ProductList />
                </div>
                <div className="right-column">
                    <OrderInfo />
                    <PaymentMethod />
                </div>
            </div>
        </div>
    );
}

export default MomoPaymentPage;