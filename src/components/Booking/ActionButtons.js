import React from "react";

function ActionButtons(props) {
    return (
        <div className="action-buttons">
            <button className="btn btn-accept" onClick={props.onAccept}>
                Đồng ý
            </button>
            <button className="btn btn-wait" onClick={props.onWait}>
                Đợi
            </button>
        </div>
    );
}
export default ActionButtons;