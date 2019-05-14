import React from 'react';
import logo from '../images/logo.png';
import video from '../video/background_video_hi_res.mp4';

export default class Video extends React.Component {
    constructor(props) {
        super(props);
        this.startVideo = this.startVideo.bind(this);
        this.video_loop = React.createRef();
    }

    startVideo() {
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
                            poster="./images/screenshot_03.png"
                            loop
                            id="background_video"
                            ref={this.video_loop}
                        />
                    </div>
                    <div className="image_container">
                        <img
                            src={logo}
                            alt="Bitter logo"
                            id="logo"
                            onClick={this.startVideo}
                        />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

// TO DO

// generate poster image randomly
// blur out when scrolling down
