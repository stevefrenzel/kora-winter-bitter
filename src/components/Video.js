import React from 'react';
import logo from '../images/logo.png';
import video from '../video/background_video.mp4';

const Video = () => (
    <React.Fragment>
        <div className="component_container">
            <h1>Video Component</h1>
            <video src={video} type="video/mp4" autoPlay loop />
            <img src={logo} alt="Bitter logo" />
        </div>
    </React.Fragment>
);

export default Video;
