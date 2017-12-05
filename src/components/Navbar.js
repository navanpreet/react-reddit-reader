import React, {Component} from 'react';
import {NavLink, Link} from 'react-router-dom';
import '../css/Navbar.css';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const activeStyle={display: 'none'};

class Navbar extends Component {
	constructor(props){
		super(props);
		this.toggle = this.toggle.bind(this);
	    this.state = {
	      dropdownOpen: false
	    };
	}

	toggle() {
	    this.setState({
	      dropdownOpen: !this.state.dropdownOpen
	    });
  	}

    
    render(){
  		let MySubReddits;
		if(this.props.data.length){
			MySubReddits = this.props.data.map((sub) => (
				<DropdownItem key={sub}>
				  <Link to={`/${sub}`}>{sub}</Link>
				</DropdownItem>
			));
			MySubReddits.push(<DropdownItem key="edit subreddit">
				  <Link to="/subreddits">EDIT SUBREDDITS</Link>
				</DropdownItem>)
		} else {
			MySubReddits = <DropdownItem>
			<Link to="/subreddits">ADD SUBREDDIT</Link>
			</DropdownItem>
		}
  return(
  <header>
  	<div className="nav-btn-group">
  		<ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
  			<DropdownToggle caret color="primary">MY SUBREDDITS</DropdownToggle>
  			<DropdownMenu>
  				{MySubReddits}
  			</DropdownMenu>
  		</ButtonDropdown>	
  		<span className="home"><NavLink exact activeStyle={activeStyle} to="/">Home</NavLink></span>
  	</div>
  </header>
  )
};
}
export default Navbar;