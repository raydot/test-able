import React, {useState} from "react";
import "../../pages/homepage/homepage.scss";


const ContextMenu = () => {
    const [muteUnmute, setMuteUnmute] = useState(true);
    const [videoNoVideo, setvideoNoVideo] = useState(true);
    const [showNoShow, setshowNoShow] = useState(true);

    const logos = {
        mute: "https://img.icons8.com/ios-filled/25/000000/mute.png",
        unmute: "https://img.icons8.com/ios-filled/25/000000/mute--v2.png",
        show: "https://img.icons8.com/material-sharp/25/000000/video-call.png",
        hide: "https://img.icons8.com/material-sharp/25/000000/no-video.png",
        hide2: "https://img.icons8.com/ios-glyphs/25/000000/hide.png",
        show2: "https://img.icons8.com/ios-glyphs/25/000000/visible.png"
    }

    const toggleMute = () => setMuteUnmute(!muteUnmute)
    const toggleVideo = () => setvideoNoVideo(!videoNoVideo)
    const toggleShow = () => setshowNoShow(!showNoShow)

    const mute = () => muteUnmute ? 'unmute' : 'mute';
    const video = () => videoNoVideo ? 'show' : 'hide';
    const show = () => showNoShow ? 'show2' : 'hide2';

    return (
        <div className="main-context">
            <div className="menu-options">
                <div className="menu-icons">
                    <img title="Show/Hide Self" className="image-icon" alt="video-novideo" src={logos[video()]} onClick={toggleVideo}/>
                    <img title="Show/Hide Interviewer" className="image-icon" alt="show-noshow" src={logos[show()]} onClick={toggleShow}/>
                    <img title="Mute/Unmute" className="image-icon" alt="mute-unmute" src={logos[mute()]} onClick={toggleMute}/>
                </div>
            
                <label htmlFor="option"></label>
                <select id="option">
                    <option value="1">Options</option>
                    <option value="2">---</option>
                    <option value="3">Please speak louder</option>
                    <option value="4">Please speak more clearly</option>
                    <option value="5">Please Speak More Slowly</option>
                    <option value="6">I Need a Break</option>
                    <option value="7">---</option>
                    <option value="8">Braille Reader Settings</option>
                    <option value="9">Enable Captions</option>
                    <option value="10">Report Technical Issue</option>
                    <option value="11">More options...</option>
                </select>
            </div>   
        </div >
    );
};

export default ContextMenu;