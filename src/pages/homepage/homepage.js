import React from "react";
import VideoChat from "../../components/livevideo/livevideo";
import ContextMenu from "./contextMenu";
import "./homepage.scss";

const HomePage = () => {
    return (
        <div className="main-section">
            <div className="video-section">
                <div className="room_lobby">
                    <VideoChat />
                </div>
                <div className="room_lobby">
                    <VideoChat />
                </div>
            </div>
            <div className="editor-section">
                <div className="heading-area">
                    <p className="code-editor-title">Code Editor:</p>
                    <ContextMenu />
                </div>
                <textarea 
                    className="code-editor"
                    placeholder="Type your code here..."
                ></textarea>
            </div>
        </div >
    );
};

export default HomePage;
