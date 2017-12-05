import React from 'react';
import Main from '../Main';
import Navbar from './Navbar';
import {connect} from 'react-redux';

const App = ({subReddits, toggleSubReddit}) => (
	      <div className="App">
	      	<Navbar data={subReddits} />
	        <Main  onToggle={toggleSubReddit} subReddits={subReddits} />
	      </div>
	    );
  	
const mapStateToProps = state => ({
  subReddits: state.subReddits
});

const mapDispatchToProps = dispatch => ({
  toggleSubReddit(subReddit) {
    dispatch({
      type: "TOGGLE_SUBREDDIT",
      subReddit
    })
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
