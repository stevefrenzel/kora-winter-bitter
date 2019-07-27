import React from 'react';
import merchLogo from '../images/MERCH-red.png';

export default class Merch extends React.Component {
    render() {
        return (
            <React.Fragment>
                {/* GROUP 3 */}
                <div id="merch_photo_component" className="parallax__group">
                    <div id="merch_logo_container" className="parallax__layer parallax__layer--fore">
                        <a href="https://korawinter.bandcamp.com/" rel="noopener noreferrer" target="_blank">
                            <img src={merchLogo} alt="Red merchandise logo" id="merch_logo" />
                        </a>
                    </div>
                    <div className="parallax__layer parallax__layer--base" />
                </div>
            </React.Fragment>
        );
    }
}

// TO DO:

// reduce file size to decrease loading time