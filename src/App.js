import React from 'react';
import Video from './components/Video';
// import Tourdates from './components/Tourdates';
import Band from './components/Band';
import Spotify from './components/Spotify';
import SocialMedia from './components/SocialMedia';
import LegalNotice from './components/LegalNotice';

export default class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="parallax">
                    <Video />
                    <Band />
                    <Spotify />
                    <SocialMedia />
                    <LegalNotice />
                </div>
            </React.Fragment>
        );
    }
}
