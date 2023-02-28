import React, { useState } from 'react';

function BanUser() {
    const [userId, setUserId] = useState('');

    const handleBanUser = () => {
        // Thực hiện yêu cầu API đến máy chủ để ban user
    }

    return (
        <div>
            <label>
                User ID:
                <input type="text" value={userId} onChange={e => setUserId(e.target.value)} />
            </label>
            <button onClick={handleBanUser}>Ban User</button>
        </div>
    );
}

export default BanUser;