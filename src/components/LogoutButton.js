import React from 'react';
import { useHistory } from 'react-router-dom';

function LogoutButton() {
    const history = useHistory();

    function handleClick() {
        // Xóa thông tin đăng nhập khỏi localStorage hoặc sessionStorage (tuỳ chọn)
        localStorage.removeItem('accessToken');
        sessionStorage.removeItem('accessToken');

        // Điều hướng đến trang đăng nhập
        history.push('/login');
    }

    return (
        <button onClick={handleClick}>
            Đăng xuất
        </button>
    );
}

export default LogoutButton;