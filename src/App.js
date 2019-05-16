import React from 'react';
import Video from './components/Video';
import Tourdates from './components/Tourdates';
import Band from './components/Band';
import Spotify from './components/Spotify';
import SocialMedia from './components/SocialMedia';

export default class App extends React.Component {
    render() {
        // console.log(
        //     '%c coded with <3',
        //     'font-weight: bold; font-size: 100px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)'
        // );
        return (
            <React.Fragment>
                <div className="parallax">
                    <Video />
                    <Tourdates />
                    <Band />
                    <Spotify />
                    <SocialMedia />
                </div>
            </React.Fragment>
        );
    }
}
