import React from 'react';
import Search from './Search';
import VideoList from './VideoList';
import VideoPlayer from './VideoPlayer';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from '../data/exampleVideoData';

var App = () => (
  <div>
    <nav className="navbar">
      <div className="col-md-6 offset-md-3">
        <div><h5><em>search</em><Search/></h5></div>
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
        <div><h5><em>videoPlayer</em> <VideoPlayer videoId={data[0].id.videoId}/></h5></div>
      </div>
      <div className="col-md-5">
        <div><h5><em>videoList</em> <VideoList videos={data}/></h5></div>
      </div>
    </div>
  </div>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// var declarations will only exist globally where explicitly defined
export default App;