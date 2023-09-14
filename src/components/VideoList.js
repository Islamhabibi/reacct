import React from 'react';
import VideoListEntry from './VideoListEntry';

var VideoList = (props) => (

  <div className="video-list">
    <div>
      <h5><em>videoListEntry</em>
        {
          props.videos.map((e) =>
            (<VideoListEntry video={e}/>))
        }


      </h5></div>

  </div>
);

// PropTypes tell other developers what props a component expects
// Warnings will be shown in the console when the defined rules are violated

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// var declarations will only exist globally where explicitly defined.
export default VideoList;