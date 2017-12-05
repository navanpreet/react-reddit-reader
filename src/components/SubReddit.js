import * as api from '../services/api';
import React, {Component} from 'react';
import Post from './Post';
import '../css/App.css';
import '../css/SubReddit.css';

class SubReddit extends Component {

	constructor(props){
		super(props);
		this.state = {
			posts : [],
			page: 0
		}
	}

	componentWillMount(){
		this.loadPosts();
	}

	async loadPosts(paging){
		if(paging){
			let page = this.state.page;
			if(Object.keys(paging)[0].includes('last')) page++;
			if(Object.keys(paging)[0].includes('first')) page--;
			this.setState({page});
		}
		let response = await api.getReddit(this.props.name, paging);
		let posts = response.data.children;
		this.setState({posts});
	}

	render() {
		const buttonText = this.props.data.subReddits.indexOf(this.props.name) === -1 ? 'Subscribe subreddit' : 'Unsubscribe subreddit';
		const lastPost = this.state.posts.length ? this.state.posts[this.state.posts.length - 1].data.name : '';
		const firstPost = this.state.posts.length ? this.state.posts[0].data.name : '';
		const page = this.state.page;
		const Posts = this.state.posts.map((post) => (
			<Post 
				key={post.data.id}
				{...post.data}
			/>
		));

		return(
			<div>
				<div>
			   		<button 
			   			className="toggle-subreddit btn"
			   			onClick={() => this.props.data.onToggle(this.props.name)}
			   		><span>{buttonText}</span>
	   		   		</button>
   		   		</div>
			      {Posts}
			   	<div className="paging-div">
				    <button 
					   className="btn"
					   disabled={page === 0}
			   		   onClick={() => this.loadPosts({firstPost})}>previous
		   		    </button>
			   		<button 
			   			className="btn paging-next-btn" 
			   			onClick={() => this.loadPosts({lastPost})}>next
			   		</button>
				</div>
			</div>
		)
	}
}

export default SubReddit;