import React, { useState, useCallback, useEffect } from "react";
import Video from "twilio-video";
import Lobby from "../lobby/lobby";
import Room from "../room/room";

const VideoChat = () => {
    const [username, setUsername] = useState("");
    const [roomName, setRoomName] = useState("");
    const [room, setRoom] = useState(null);
    const [connecting, setConnecting] = useState(false);
    const serverPath = "https://test-able-server.herokuapp.com";

    const handleUsernameChange = useCallback((event) => {
        setUsername(event.target.value);
    }, []);

    const handleRoomNameChange = useCallback((event) => {
        setRoomName(event.target.value);
    }, []);

    const handleSubmit = useCallback(
        async (event) => {
            event.preventDefault();
            setConnecting(true);
            const data = await fetch(`${serverPath}/video/token`, {
                method: "POST",
                body: JSON.stringify({
                    identity: username,
                    room: roomName,
                }),
                headers: {
                    "Content-Type": "text/plain",
                },
            }).then((res) => res.json());
            Video.connect(data.token, {
                name: roomName,
            })
                .then((room) => {
                    setConnecting(false);
                    setRoom(room);
                })
                .catch((err) => {
                    console.error(err);
                    setConnecting(false);
                });
        },
        [roomName, username]
    );

    const handleLogout = useCallback(() => {
        setRoom((prevRoom) => {
            if (prevRoom) {
                prevRoom.localParticipant.tracks.forEach((trackPub) => {
                    trackPub.track.stop();
                });
                prevRoom.disconnect();
            }
            return null;
        });
    }, []);

    useEffect(() => {
        if (room) {
            const tidyUp = (event) => {
                if (event.persisted) {
                    return;
                }
                if (room) {
                    handleLogout();
                }
            };
            window.addEventListener("pagehide", tidyUp);
            window.addEventListener("beforeunload", tidyUp);
            return () => {
                window.removeEventListener("pagehide", tidyUp);
                window.removeEventListener("beforeunload", tidyUp);
            };
        }
    }, [room, handleLogout]);

    let render;
    if (room) {
        render = (
            <Room roomName={roomName} room={room} handleLogout={handleLogout} />
        );
    } else {
        render = (
            <Lobby
                username={username}
                roomName={roomName}
                handleUsernameChange={handleUsernameChange}
                handleRoomNameChange={handleRoomNameChange}
                handleSubmit={handleSubmit}
                connecting={connecting}
            />
        );
    }
    return render;
};

export default VideoChat;
