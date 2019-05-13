import React from 'react';

const SocialMedia = () => (
    <React.Fragment>
        <div className="component_container">
            <h1>Social Media component</h1>
            <div className="icons">
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
    </React.Fragment>
);

export default SocialMedia;
