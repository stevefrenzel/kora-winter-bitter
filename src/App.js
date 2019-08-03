import React from 'react';
import Video from './components/Video';
import Tourdates from './components/Tourdates';
import Band from './components/Band';
import Music from './components/Music';
import SocialMedia from './components/SocialMedia';
import LegalNotice from './components/LegalNotice';
import Merch from './components/Merch';

export default class App extends React.Component {
    state = { show: false};

    handleChange = () => {
        if (this.state.show) {
            console.log('show: false');
            this.setState({ show: false });
        } else if (!this.state.show) {
            console.log('show: true');
            this.setState({ show: true });
        }
    };

    render() {
        return (
                <React.Fragment>
                    <div className="parallax">
                        <Video />
                        <Tourdates />
                        <Band />
                        <Merch />
                        <Music />
                        <SocialMedia
                        handleChange={this.handleChange}
                        componentVisible={this.state.show}
                        />
                    </div>
                    {this.state.show ? <LegalNotice handleChange={this.handleChange} /> : null}
                </React.Fragment>
        );
    }
}

// TO DO:

// add scroll snap