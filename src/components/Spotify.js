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
            'Content-Type': 'application/x-www-form-urlencoded',
            headers: {
                'Access-Control-Allow-Origin': '*',
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
                <div className="component_container spotify_component">
                    <h1>Spotify Component</h1>
                </div>
            </React.Fragment>
        );
    }
}
