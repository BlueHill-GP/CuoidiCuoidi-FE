import React from 'react';
import MomoIcon from '/home/linhanna/IdeaProjects/CuoidiCuoidi-FE/src/assets/image/momo_icon.svg'
function MomoButton() {
    return (
        <button className="momo-button">
            <img src={MomoIcon} alt="Momo icon" />
            <span>Thanh toán qua Momo</span>
        </button>
    );
}

export default MomoButton;

