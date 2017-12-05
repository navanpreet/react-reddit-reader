import React, {Component} from 'react';
import * as api from '../services/api';
import PostWithToggle from './PostWithToggle';
import '../css/App.css';
import '../css/AllSubReddits.css';

class AllSubReddits extends Component {
	constructor(props){
		super(props);
		this.state = {
			subReddits: [],
			query: '',
			page: 0
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentWillMount(){
		this.loadSubReddits();
	}

	handleChange(e) {
		this.setState({[e.target.name]: e.target.value});
	}

	handleSubmit(e) {
		e.preventDefault();
		this.searchSubReddits(this.state.query);
	}

	async loadSubReddits(paging){
		if(paging){
			let page = this.state.page;
			if(Object.keys(paging)[0].includes('last')) page++;
			if(Object.keys(paging)[0].includes('first')) page--;
			this.setState({page});
		}
		let response = await api.getSubReddits(paging);
		let subReddits = response.data.children;
		this.setState({subReddits});
	}

	async searchSubReddits(name){
		let response = await api.searchReddit(name);
		let subReddits = response.data.children;
		this.setState({subReddits});
	}


	render(){
		const lastPost = this.state.subReddits.length ? this.state.subReddits[this.state.subReddits.length - 1].data.name : '';
		const firstPost = this.state.subReddits.length ? this.state.subReddits[0].data.name : '';
		const page = this.state.page;
		const isQuery = this.state.query === '' ? false : true;
		const subReddits = this.state.subReddits.map((sub) => (
			<PostWithToggle 
				key={sub.data.id}
				{...sub.data}
				onToggle={this.props.data.onToggle}
				subscribedSubReddits={this.props.data.subReddits}
			/>	
		));
		return (
			<div>
				<div>
					<h1>Sub Reddits</h1>
				</div>
				<div className="buttons">
					<form onSubmit={this.handleSubmit}>
						<input 
							className="input-query"
							type="text"
							placeholder="search"
							name="query"
							onChange={this.handleChange} 
						/>
						<button
				            type="submit"
				            className="btn search-button"
          				>SEARCH</button>
					</form>
				</div>
				<div>
					{subReddits}
				</div>
				<div className="paging-div" style={{display: isQuery === true ? 'none' : ''}}>
					<button 
						className="btn"
						disabled={page === 0}
						onClick={() => this.loadSubReddits({firstPost})}
					>previous</button>
					<button 
						className="btn paging-next-btn" 
						onClick={() => this.loadSubReddits({lastPost})}
					>next</button>
				</div>
			</div>
		)
	}
}

export default AllSubReddits;