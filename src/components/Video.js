import React from 'react';
// import logo from '../images/logo.png';
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
                {/* GROUP 1*/}
                <div id="video_component" className="parallax__group">
                    <div
                        className="parallax__layer parallax__layer--base"
                        onClick={this.startVideo}
                    >
                        <video src={video} ref={this.video_loop} loop />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

// TO DO

// generate poster image randomly
// blur out when scrolling down

// <img
//     src={logo}
//     alt="Bitter logo"
//     id="logo"
//     onClick={this.startVideo}
// />
