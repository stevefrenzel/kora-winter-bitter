import React from 'react';
import Video from './components/Video';
import Tourdates from './components/Tourdates';
import SocialMedia from './components/SocialMedia';
import Band from './components/Band';
import Spotify from './components/Spotify';
import Footer from './components/Footer';

export default class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="flex_container">
                    <Video />
                    <Tourdates />
                    <Band />
                    <Spotify />
                    <SocialMedia />
                    <Footer />
                </div>
            </React.Fragment>
        );
    }
}
