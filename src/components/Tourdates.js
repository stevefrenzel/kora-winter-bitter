import React from 'react';
// import secrets from '../secrets.json';

const moment = require('moment');
moment().format();

// const API_KEY = secrets.BANDSINTOWN_ID;

export default class Tourdates extends React.Component {
    state = {};
    render() {
        // if (!this.state.bandsInTown) {
        //     return null;
        //     // add spinner
        // }
        return (
            <React.Fragment>
                {/* GROUP 2*/}
                <div id="tourdates_component" className="parallax__group bitter-font">
                    <div className="tourdates_content parallax__layer parallax__layer--fore">
                       <h1>Tour Dates</h1>
                        <p className="tourdate_entry">
                            <a href="https://www.facebook.com/events/2472678699635945/" target="_blank" rel="noopener noreferrer">
                            17.Aug.2019 - Eisenach - Everland Festival
                            </a>
                        </p>
                        <p className="tourdate_entry">
                            <a href="https://www.facebook.com/events/349633399195006/" target="_blank" rel="noopener noreferrer">
                                21.Sep.2019 - Berlin - Heartcore Festival
                            </a>
                        </p>
                    </div>
                    <div className="parallax__layer parallax__layer--base" />
                </div>
            </React.Fragment>
        );
    }
}
