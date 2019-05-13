import React from 'react';
import logo from '../images/logo.png';
import video from '../video/background_video.mp4';

// const audio_loop = document.getElementById('background_audio');

export default class Video extends React.Component {
    constructor(props) {
        super(props);
        this.startVideoAndAudio = this.startVideoAndAudio.bind(this);
        this.video_loop = React.createRef();
    }

    startVideoAndAudio() {
        if (this.video_loop.current.paused) {
            this.video_loop.current.play();
        } else {
            this.video_loop.current.pause();
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="component_container">
                    <div className="video_container">
                        <video
                            src={video}
                            type="video/mp4"
                            poster="./images/screenshot_01.png"
                            loop
                            id="background_video"
                            ref={this.video_loop}
                        />
                    </div>
                    <div
                        className="image_container"
                        onClick={this.startVideoAndAudio}
                    >
                        <img src={logo} alt="Bitter logo" id="logo" />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

// TO DO

// generate background audio randomly
// generate fixed image randomly
