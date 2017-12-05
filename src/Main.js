import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import SubReddit from './components/SubReddit';
import AllSubReddits from './components/AllSubReddits';

const Main = (SubReddits) => (
  <Switch>
    <Route exact path="/" render={(props) => (
      <Home {...props} data={SubReddits}/>
    )}/>
    <Route exact path="/subreddits" render={(props) => (
      <AllSubReddits  data={SubReddits}/>
    )}/>
    <Route exact path="/:name" render={(props) => (
	  <SubReddit key={props.match.params.name} name={props.match.params.name} data={SubReddits}/>
    )}/>
  </Switch>
);

export default Main;
