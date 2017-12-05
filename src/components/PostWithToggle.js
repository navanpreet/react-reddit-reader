import React, {Component} from 'react';
import '../css/PostWithToggle.css'

class PostWithToggle extends Component {

	render(){
		const buttonText = this.props.subscribedSubReddits.indexOf(this.props.display_name) === -1 ? 'Subscribe' : 'Unsubscribe';
		return(
			<div >
			<button 
				className="toggle btn"
				onClick={() => this.props.onToggle(this.props.display_name)}
			><span>{buttonText}</span>
			</button>
			<div className="PostWithToggle-div">
				<span><a href={this.props.display_name}>{this.props.display_name_prefixed}</a>: {this.props.display_name}</span>
				<br/>
				<span>{this.props.public_description}</span>
				</div>
			</div>	
		)
	}
}


export default PostWithToggle;
