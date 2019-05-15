import React from 'react';
import secrets from '../secrets.json';

const SPOTIFY_ID = secrets.SPOTIFY_ID;
const SPOTIFY_SECRET = secrets.SPOTIFY_SECRET;

export default class Spotify extends React.Component {
    state = {};

    componentDidMount = () => {
        fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            mode: 'no-cors',
            body: 'grant_type=client_credentials',

            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                // 'Access-Control-Allow-Origin': '*',
                Authorization:
                    'Basic ' + btoa(`${SPOTIFY_ID}:${SPOTIFY_SECRET}`)
            }
        }).then(data => {
            console.log('Data from fetch: ', data);
        });
    };

    render() {
        return (
            <React.Fragment>
                {/* GROUP 4 */}
                <div id="spotify_component" className="parallax__group">
                    <div className="parallax__layer parallax__layer--fore">
                        <h1 className="center_content">
                            SPOTIFY PLAYER (Group 4)
                        </h1>
                    </div>
                    <div className="parallax__layer parallax__layer--base">
                        <h1 className="center_content">
                            SPOTIFY COMPONENT (Group 4)
                        </h1>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
