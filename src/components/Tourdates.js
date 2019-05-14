import React from 'react';
import secrets from '../secrets.json';

const moment = require('moment');
moment().format();

const API_KEY = secrets.BANDSINTOWN_ID;

export default class Tourdates extends React.Component {
    state = {};

    componentDidMount = async () => {
        const api_call = await fetch(
            `https://rest.bandsintown.com/artists/architects/events?app_id=${API_KEY}`
        );
        const data = await api_call.json();
        this.setState({
            bandsInTown: data.slice(0, 10)
        });
    };

    render() {
        if (!this.state.bandsInTown) {
            return null;
            // add spinner
        }
        return (
            <React.Fragment>
                <div className="component_container tourdates_component">
                    {this.state.bandsInTown.map(event => {
                        return (
                            <div key={event.id}>
                                <p>
                                    On{' '}
                                    {moment(event.datetime).format('MMM Do YY')}{' '}
                                    in {event.venue.city} ({event.venue.country}
                                    ) at {event.venue.name} |{' '}
                                    <a
                                        href={event.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Tickets
                                    </a>
                                </p>
                                <p>…</p>
                            </div>
                        );
                    })}
                </div>
            </React.Fragment>
        );
    }
}
