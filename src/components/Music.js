import React from 'react';
import bluehtArtwork from '../images/01_blueht.jpg';
import bluehtDescription from '../images/01_blueht_description.png';
import welkArtwork from '../images/02_welk.jpg';
import welkDescription from '../images/02_welk_description.png';
import bitterArtwork from '../images/03_bitter.png';
import bitterDescription from '../images/03_bitter_description.png';

export default class Music extends React.Component {
    render() {
        return (
            <React.Fragment>
                {/* GROUP 4 */}
                <div id="music_component" className="parallax__group">

                    <div className="parallax__layer parallax__layer--fore">

                        <div className="image_wrapper">
                            <div className="album_wrapper">
                                <img className="album_artwork" src={bitterArtwork} alt="Kora Winter - Bitter" />
                                <img className="album_description" src={bitterDescription} alt="Bitter description" />
                            </div>

                            <div className="album_wrapper">
                                <a href="https://open.spotify.com/album/1aj7iAfh1c1io39LPNi3t1?si=pTUd83UTRbGBnsKjL9Wckw" target="_blank" rel="noopener noreferrer">
                                    <img className="album_artwork" src={welkArtwork} alt="Kora Winter - Welk" />
                                    <img className="album_description" src={welkDescription} alt="Bitter description" />
                                </a>
                            </div>

                            <div className="album_wrapper">
                                <a href="https://open.spotify.com/album/5rXw9rHkAbbsjegFTu5PuD?si=SxrcdTwTRZ6eVKcspeiRTA" target="_blank" rel="noopener noreferrer">
                                    <img className="album_artwork" src={bluehtArtwork} alt="Kora Winter - Blueht" />
                                    <img className="album_description" src={bluehtDescription} alt="Bitter description" />
                                </a>
                            </div>

                        </div>

                    </div>

                    <div className="parallax__layer parallax__layer--base" />
                    
                </div>
            </React.Fragment>
        );
    }
}

// TO DO:

// how to align and center content in the middle of component?
// how to align and center artwork and description within div?