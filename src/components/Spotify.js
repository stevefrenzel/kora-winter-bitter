import React from 'react';

const Spotify = () => (
    <React.Fragment>
        <div className="component_container spotify_component">
            <h1>Spotify component</h1>
            <iframe
                src="https://open.spotify.com/embed/album/1aj7iAfh1c1io39LPNi3t1"
                width="300"
                height="380"
                frameBorder="0"
                allowtransparency="true"
                allow="encrypted-media"
                title="Kora Winter"
            />
        </div>
    </React.Fragment>
);

export default Spotify;
