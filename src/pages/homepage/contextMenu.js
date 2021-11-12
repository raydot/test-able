import React from "react";
import "./homepage.scss";

const ContextMenu = () => {
    return (
        <div className="main-context">
            <select value="Contextual Menu">
                <option value="1">Contextual Menu</option>
                <option value="2">Show/Hide Interviewer</option>
                <option value="3">Show/Hide Self</option>
                <option value="4">Mute/Unmute</option>
                <option value="5">Please speak louder</option>
                <option value="6">Please speak more clearly</option>
                <option value="7">I need a break</option>
                <option value="8">Enable Captions</option>
                <option value="9">Report Technical Issue</option>
                <option value="10">More options...</option>
            </select>
        </div >
    );
};

export default ContextMenu;