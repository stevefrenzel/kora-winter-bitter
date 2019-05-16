import React from 'react';
import logo from '../images/logo.png';
import video from '../video/background_video_hi_res.mp4';

export default class Video extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.startVideo = this.startVideo.bind(this);
        this.dontLoadVideo = this.dontLoadVideo.bind(this);
        this.video_loop = React.createRef();
    }

    componentDidMount() {
        this.dontLoadVideo();
        window.addEventListener('resize', this.dontLoadVideo);
    }

    startVideo() {
        try {
            if (this.video_loop.current.paused) {
                this.video_loop.current.play();
            } else {
                this.video_loop.current.pause();
            }
        } catch (e) {
            console.log('startVideo() ERROR: ', e);
        }
    }

    dontLoadVideo() {
        try {
            var getDisplay = window
                .getComputedStyle(this.video_loop.current)
                .getPropertyValue('display');
        } catch (e) {
            console.log('ERROR: ', e);
        }

        if (getDisplay === 'none') {
            this.setState({ stopVideoLoad: true });
        } else {
            this.setState({ stopVideoLoad: false });
        }
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
                        {!this.state.stopVideoLoad && (
                            <video src={video} ref={this.video_loop} loop />
                        )}
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
