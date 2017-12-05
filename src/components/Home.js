import React, {Component} from 'react';
import * as api from '../services/api';
import Post from './Post';
import '../css/App.css';

class Home extends Component {
	
	constructor(props){
		super(props);
		this.state = {
			posts: [],
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
		let response;
		if(this.props.data.subReddits.length === 0){
			response = await api.getReddit('news', paging);
		} else {
			response = await api.getReddit(this.props.data.subReddits[Math.floor(Math.random()*this.props.data.subReddits.length)], paging);
		}
		let posts = response.data.children;
		this.setState({posts});
	}

	render(){
		const lastPost = this.state.posts.length ? this.state.posts[this.state.posts.length - 1].data.name : '';
		const firstPost = this.state.posts.length ? this.state.posts[0].data.name : '';
		const page = this.state.page;
		const Posts = this.state.posts.map((post) => (
			<Post 
				key={post.data.name}
				{...post.data}
			/>
		));

		return (
			<div>
				<br/>
				<div>
					{Posts}
				</div>
				<div className="paging-div">
					<button 
						className="btn"
						disabled={page === 0}
						onClick={() => this.loadPosts({firstPost})}
					>previous</button>
					<button 
						className="paging-next-btn btn" 
						onClick={() => this.loadPosts({lastPost})}
					>next</button>
				</div>
			</div>
		)
	}
}

export default Home;