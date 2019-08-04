import React from 'react';
import logo from '../build/images/logo_low.png' ;
import video from '../build/video/background_video_lo_res.mov';

export default class Video extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.video_loop = React.createRef();
    }

    componentDidMount() {
        this.dontLoadVideo();
        window.addEventListener('resize', this.dontLoadVideo);
    }

    startVideo = () => {
        try {
            if (this.video_loop.current.paused) {
                let bg_vid = document.getElementById("bg_video");
                bg_vid.classList.remove("video_hidden");
                this.video_loop.current.play();
            } else {
                this.video_loop.current.pause();
            }
        } catch (e) {}
    };

    dontLoadVideo = () => {
        try {
            var getDisplay = window
                .getComputedStyle(this.video_loop.current)
                .getPropertyValue('display');
        } catch (e) {}

        if (getDisplay === 'none') {
            this.setState({ stopVideoLoad: true });
        } else {
            this.setState({ stopVideoLoad: false });
        }
    };

    render() {
        return (
            <React.Fragment>
                {/* GROUP 1*/}
                <div id="video_component" className="parallax__group">
                    <div className="video_headline parallax__layer parallax__layer--fore">
                        <img onClick={this.startVideo} src={logo} alt="Bitter logo" id="bitter_logo" className="center_content" />
                    </div>
                    <div className="video_background parallax__layer parallax__layer--base">
                        <div id="bg_video" className="video_hidden">
                            {!this.state.stopVideoLoad && (<video src={video} ref={this.video_loop} loop />)}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

// TODO:

// Look for an easier way prevent video from loading on mobile devices
// Get video in lower resolution