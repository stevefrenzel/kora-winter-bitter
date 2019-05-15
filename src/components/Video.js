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

    blurWhenScrolling() {
        window.addEventListener('scroll', function(e) {
            console.log('Scroll information:', e);
        });
    }

    render() {
        return (
            <React.Fragment>
                {/* GROUP 1*/}
                <div
                    id="video_component"
                    className="parallax__group"
                    onScroll={this.blurWhenScrolling}
                >
                    <div className="parallax__layer parallax__layer--base">
                        <video src={video} ref={this.video_loop} loop />
                    </div>
                    <div className="parallax__layer parallax__layer--fore">
                        <img
                            onClick={this.startVideo}
                            src={logo}
                            alt="Bitter logo"
                            id="bitter_logo"
                            className="center_content"
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
