import React from 'react';
var VideoPlayer = ({videoId}) => (
  <div className="video-player">
    <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} allowFullScreen></iframe>
    </div>
    <div className="video-player-details">
      <h3>Video Title</h3>
      <div>Video Description</div>
    </div>
  </div>
);

// PropTypes tell other developers what props a component expects
// Warnings will be shown in the console when the defined rules are violated


// In the ES6 spec, files are "modules" and do not share a top-level scope
// var declarations will only exist globally where explicitly defined
export default VideoPlayer;