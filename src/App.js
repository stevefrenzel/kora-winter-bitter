import React from 'react';
import Video from './components/Video';
// import Tourdates from './components/Tourdates';
import Band from './components/Band';
import Spotify from './components/Spotify';
import SocialMedia from './components/SocialMedia';
// import LegalNotice from './components/LegalNotice';
import Merch from './components/Merch';

export default class App extends React.Component {
    render() {
        return (
                <div className="parallax">
                    <Video />
                    <Band />
                    <Merch />
                    <Spotify />
                    <SocialMedia />
                </div>
        );
    }
}

// TO DO:

// add scroll snap