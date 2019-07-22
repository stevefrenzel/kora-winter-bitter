import React from 'react';

export default class Band extends React.Component {
    render() {
        return (
            <React.Fragment>
                {/* GROUP 3 */}
                <div id="band_photo_component" className="parallax__group">
                    <div className="parallax__layer parallax__layer--fore" />
                    <div className="parallax__layer parallax__layer--base" />
                </div>
            </React.Fragment>
        );
    }
}

// TO DO:

// reduce file size to decrease loading time