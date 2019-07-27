import React from 'react';
import Video from './components/Video';
// import Tourdates from './components/Tourdates';
import Band from './components/Band';
import Music from './components/Music';
import SocialMedia from './components/SocialMedia';
import LegalNotice from './components/LegalNotice';
import Merch from './components/Merch';

export default class App extends React.Component {
    state = { show: false}

    handleChange = () => {
        if (this.state.show) {
            console.log('show: false');
            this.setState({ show: false });
        } else if (!this.state.show) {
            console.log('show: true');
            this.setState({ show: true });
        }
    }

    render() {
        return (
                <div className="parallax">
                    <Video />
                    <Band />
                    <Merch />
                    <Music />
                    <SocialMedia 
                    handleChange={this.handleChange}
                    componentVisible={this.state.show}
                    />
                    {this.state.show ? <LegalNotice /> : null}
                </div>
        );
    }
}

// TO DO:

// add scroll snap