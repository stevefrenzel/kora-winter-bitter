import React from 'react';
import photo from '../images/kora_winter_band.jpg';
import logo from '../images/band_logo.png';

const Band = () => (
    <React.Fragment>
        <div className="component_container band_component">
            <img src={photo} alt="Kora Winter band" id="band_photo" />
            {/*<img src={logo} alt="Kora Winter logo" id="band_logo" />*/}
        </div>
    </React.Fragment>
);

export default Band;
