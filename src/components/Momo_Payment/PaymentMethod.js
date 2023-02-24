import React, { useState } from 'react';
import MomoLogo from './momo.png';
import MomoQRCode from './momo_qrcode.png';
import MomoButton from './MomoButton';

function PaymentMethod() {
    const [activeOption, setActiveOption] = useState('momo');

    const handleOptionChange = (e) => {
        setActiveOption(e.target.value);
    };

    return (
        <div className="payment-method">
            <h2>Phương thức thanh toán</h2>
            <div>
                <div
                    className={`payment-option ${activeOption === 'momo' ? 'active' : ''}`}
                    onClick={() => setActiveOption('momo')}
                >
                    <input type="radio" name="payment-option" value="momo" checked={activeOption === 'momo'} onChange={handleOptionChange} />
                    <label htmlFor="payment-option">Thanh toán qua Momo</label>
                </div>
                <div
                    className={`payment-option ${activeOption === 'cod' ? 'active' : ''}`}
                    onClick={() => setActiveOption('cod')}
                >
                    <input type="radio" name="payment-option" value="cod" checked={activeOption === 'cod'} onChange={handleOptionChange} />
                    <label htmlFor="payment-option">Thanh toán khi nhận hàng (COD)</label>
                </div>
            </div>
            {activeOption === 'momo' && (
                <div className="payment-content">
                    <div className="momo-payment">
                        <div className="momo-logo">
                            <img src={MomoLogo} alt="Momo" />
                        </div>
                        <div className="momo-instruction">
                            <p>
                                Quý khách vui lòng quét mã QR code bên dưới để thực hiện thanh toán qua ứng dụng Momo
                            </p>
                        </div>
                        <div className="momo-qrcode">
                            <img src={MomoQRCode} alt="Momo QR Code" />
                        </div>
                        <div className="momo-button">
                            <MomoButton />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PaymentMethod;