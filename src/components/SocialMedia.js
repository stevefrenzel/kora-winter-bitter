import React from 'react';

export default class SocialMedia extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div id="social_media_component" className="parallax__group">
                    <div id="icons_container" className="parallax__layer parallax__layer--fore">
                        <div className="icons">
                            <a href="https://www.facebook.com/korawinterband" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook-square" />
                            </a>
                            <a href="https://www.instagram.com/korawinter/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram" />
                            </a>
                            <a href="https://twitter.com/korawinter" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-twitter-square" />
                            </a>
                            <a href="https://korawinter.bandcamp.com/merch" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-bandcamp" />
                            </a>
                        </div>
                        <h2 onClick={this.props.handleChange} id="legal_notice_link" className="bitter-font">Legal Notice</h2>
                    </div>
                    <div className="parallax__layer parallax__layer--base" />
                </div>
            </React.Fragment>
        );
    }
}

// TO DO:

// media queries need to be fixed
// .center_content causes problem in Chrome