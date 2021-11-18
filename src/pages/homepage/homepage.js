import React from "react";
import CodeEditor from "../../components/codeeditor/codeeditor";
import ContextMenu from "../../components/contextmenu/contextmenu";
import VideoChat from "../../components/livevideo/livevideo";
import "./homepage.scss";

const HomePage = () => {
    return (
        <div className="main-section">
            <div className="video-section">
                <div className="room_lobby">
                    <VideoChat />
                </div>
            </div>
            <div className="editor-section">
                <div className="heading-area">
                    <p className="code-editor-title">Code Editor:</p>
                    <ContextMenu />
                </div>
                <CodeEditor />
            </div>
        </div>
    );
};

export default HomePage;
