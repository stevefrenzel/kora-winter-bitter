import React from 'react';
import secrets from '../secrets.json';

const API_KEY = secrets.API_KEY;

export default class Tourdates extends React.Component {
    state = {};
    componentDidMount = async () => {
        const api_call = await fetch(
            `https://rest.bandsintown.com/artists/architects/events?app_id=${API_KEY}`
        );
        const data = await api_call.json();
        console.log('Data from API call: ', data);
        this.setState({
            bandsInTown: data
        });
    };

    render() {
        return (
            <React.Fragment>
                <div className="component_container">
                    <h1>Tourdates Component</h1>
                </div>
            </React.Fragment>
        );
    }
}

// TO DO:

// loop throug 10 first dates
