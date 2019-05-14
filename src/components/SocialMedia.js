import React from 'react';

const SocialMedia = () => (
    <React.Fragment>
        <div id="social_media_component" className="parallax__group">
            <div className="parallax__layer parallax__layer--back" />
            <div className="parallax__layer parallax__layer--base">
                <div className="center_content icons">
                    <a
                        href="https://www.facebook.com/korawinterband"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-facebook-square" />
                    </a>
                    <a
                        href="https://www.instagram.com/korawinter/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-instagram" />
                    </a>
                    <a
                        href="https://twitter.com/korawinter"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-twitter-square" />
                    </a>
                    <a
                        href="https://korawinter.bandcamp.com/merch"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-bandcamp" />
                    </a>
                </div>
            </div>
        </div>
    </React.Fragment>
);

export default SocialMedia;
