import React from 'react';
import Header from './Header';
import ProductList from './ProductList';
import OrderInfo from './OrderInfo';
import PaymentMethod from './PaymentMethod';
import './App.css';

function MomoPaymentPage() {
    return (
        <div>
            <Header />
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