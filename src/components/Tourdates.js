import React from 'react';

const moment = require('moment');
moment().format();

export default class Tourdates extends React.Component {

    state = {};

    componentDidMount = async () => {
        const api_call = await fetch(
            '/tourdates.json'
        );
        const data = await api_call.json();
        this.setState({
            tourdates: data
        });
    };

    render() {
        if (!this.state.tourdates) {
            return null;
            // add spinner
        }
        return (
            <React.Fragment>
                {/* GROUP 2*/}
                <div id="tourdates_component" className="parallax__group bitter-font">
                    <div className="tourdates_content parallax__layer parallax__layer--fore">
                        <h1>Tour Dates</h1>
                        {this.state.tourdates.map(event => {
                            // if yesterday is before tourdate
                            if (new Date().setDate(new Date().getDate() - 1) < new Date(event.when)) {
                                return (
                                    <p className="tourdate_entry">
                                        <a href={event.url} target="_blank" rel="noopener noreferrer">
                                            {getDate(event.when)} - {event.city} - {event.where}
                                        </a>
                                    </p>
                                );
                            }
                            return null;
                        })}
                    </div>
                    <div className="parallax__layer parallax__layer--base"/>
                </div>
            </React.Fragment>
        );
    }
}

function getDate(date) {
    let dateObj = new Date(date);
    let germanMonth = [
        "Jan",
        "Feb",
        "Mär",
        "Apr",
        "Mai",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Okt",
        "Nov",
        "Dez"
    ];

    let day = dateObj.getDate() + "";
    if (1 === day.length) {
        day = "0" + day;
    }

    return day + "." + germanMonth[dateObj.getMonth()] + "." + dateObj.getFullYear();
}