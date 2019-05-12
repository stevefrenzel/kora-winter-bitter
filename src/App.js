import React from 'react';
import Video from './components/Video';
import Tourdates from './components/Tourdates';
import SocialMedia from './components/SocialMedia';
import Footer from './components/Footer';

const API_KEY = 'e892394b9e496f2cb8ca3ad96495e695';

export default class App extends React.Component {
    componentDidMount = async () => {
        const api_call = await fetch(
            `https://rest.bandsintown.com/artists/metallica/events?app_id=${API_KEY}`
        );
        const data = await api_call.json();
        console.log('Data from API call: ', data);
    };

    render() {
        return (
            <React.Fragment>
                <div className="flex_container">
                    <Video />
                    <Tourdates />
                    <SocialMedia />
                    <Footer />
                </div>
            </React.Fragment>
        );
    }
}

// TO DO:

// make the API call here and pass props to Tourdates OR
// do it directly in Tourdates?
