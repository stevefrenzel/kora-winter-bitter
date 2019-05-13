import React from 'react';
import logo from '../images/logo.png';
import video from '../video/background_video.mp4';

const Video = () => (
    <React.Fragment>
        <div className="component_container">
            <div className="video_container">
                <video
                    src={video}
                    type="video/mp4"
                    poster="./images/screenshot_01.png"
                    autoPlay
                    loop
                    id="background_video"
                />
                <audio
                    loop
                    src="./audio/loop_03.wav"
                    type="audio/wav"
                    id="background_audio"
                />
            </div>
            <img src={logo} alt="Bitter logo" id="logo" />
        </div>
    </React.Fragment>
);

export default Video;

// TO DO

// generate background audio randomly
// generate fixed image randomly
