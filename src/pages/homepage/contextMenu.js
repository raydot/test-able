import React from "react";
import "./homepage.scss";

const ContextMenu = () => {
    return (
        <div className="main-context">
            <select value="Contextual Menu">
                <option value="Orange">Contextual Menu</option>
                <option value="Radish">Show/Hide Interviewer</option>
                <option value="Cherry">Show/Hide Self</option>
                <option value="Radish">Mute/Unmute</option>
                <option value="Cherry">Please speak louder</option>
                <option value="Radish">Please speak more clearly</option>
                <option value="Cherry">I need a break</option>
                <option value="Radish">Enable Captions</option>
                <option value="Cherry">Report Technical Issue</option>
                <option value="Cherry">More options...</option>
            </select>
        </div >
    );
};

export default ContextMenu;