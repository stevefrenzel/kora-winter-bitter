import React from 'react';
import secrets from '../secrets.json';

const moment = require('moment');
moment().format();

const API_KEY = secrets.BANDSINTOWN_ID;

export default class Tourdates extends React.Component {
    state = {};

    componentDidMount = async () => {
        const api_call = await fetch(
            `https://rest.bandsintown.com/artists/rammstein/events?app_id=${API_KEY}`
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
                {/* GROUP 2*/}
                <div id="tourdates_component" className="parallax__group">
                    <div className="parallax__layer_tourdates parallax__layer--fore">
                        {this.state.bandsInTown.map(event => {
                            return (
                                <div
                                    key={event.id}
                                    className="tourdates_foreground visible"
                                >
                                    <p>
                                        {moment(event.datetime).format(
                                            'MMM Do YY'
                                        )}{' '}
                                        • {event.venue.city} (
                                        {event.venue.country}) •{' '}
                                        {event.venue.name} •{' '}
                                        <a
                                            href={event.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Tickets
                                        </a>
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                    <div className="parallax__layer parallax__layer--base" />
                </div>
            </React.Fragment>
        );
    }
}
