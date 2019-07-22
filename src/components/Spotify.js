import React from 'react';
import blueht from '../images/01_blueht.jpg';
import welk from '../images/02_welk.jpg';
import bitter from '../images/album_artwork.jpg';

export default class Spotify extends React.Component {
    render() {
        return (
            <React.Fragment>
                {/* GROUP 4 */}
                <div id="spotify_component" className="parallax__group">

                    <div className="parallax__layer parallax__layer--fore">

                        <div className="image_wrapper center_content">
                            <div className="album_wrapper">
                                <img src={bitter} alt="Kora Winter - Bitter" />
                                <p>Bitter</p>
                            </div>

                            <div className="album_wrapper">
                                <a href="https://open.spotify.com/album/1aj7iAfh1c1io39LPNi3t1?si=pTUd83UTRbGBnsKjL9Wckw" target="_blank" rel="noopener noreferrer">
                                    <img src={welk} alt="Kora Winter - Welk" />
                                    <p>Welk</p>
                                </a>
                            </div>

                            <div className="album_wrapper">
                                <a href="https://open.spotify.com/album/5rXw9rHkAbbsjegFTu5PuD?si=SxrcdTwTRZ6eVKcspeiRTA" target="_blank" rel="noopener noreferrer">
                                    <img src={blueht} alt="Kora Winter - Blueht" />
                                    <p>Blüht</p>
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

// reduce file size to decrease loading time
// update "Bitter" artwork