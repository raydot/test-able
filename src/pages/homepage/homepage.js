import React from "react";
import VideoChat from "../../components/livevideo/livevideo";
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

            </div>
        </div >
    );
};

export default HomePage;
