import React from 'react';
import MomoIcon from './momo_icon.png';

function MomoButton() {
    return (
        <button className="momo-button">
            <img src={MomoIcon} alt="Momo icon" />
            <span>Thanh toán qua Momo</span>
        </button>
    );
}

export default MomoButton;

