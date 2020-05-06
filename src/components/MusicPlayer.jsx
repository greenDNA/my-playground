import React from "react";

function MusicPlayer(){

    return (
        <div className="wrap-border">
            <p style={{textDecoration: "underline"}}>MusicPlayer</p>
            {/* Issue with the iframe not playing the audio, but loading */}
            {/* <iframe src="https://open.spotify.com/embed/album/1ATL5GLyefJaxhQzSPVrLX" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> */}
        </div>
    );
}

export default MusicPlayer;