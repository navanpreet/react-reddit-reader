const SUBREDDITSURL = "https://www.reddit.com/subreddits.json";

const REDDITURL = "https://www.reddit.com/r/";

const SEARCHURL = "https://www.reddit.com/subreddits/search.json?q=";


export async function getSubReddits(paging) {
	let url;
	if(paging){
		const pagerText = Object.keys(paging)[0].includes('last') ? 'after' : 'before'; 
		url = `${SUBREDDITSURL}?count=25&${pagerText}=${paging[Object.keys(paging)[0]]}`;
	} else {
		url = SUBREDDITSURL;
	}
	return fetch(url)
		.then(res => {
			if(!res.ok) {
				return res.json()
					.then(data => {
						let err = {errorMessage: data.message};
						throw err;
					})
			}
			return res.json();
		})
}

export async function getReddit(name, paging) {
	let url;
	if(paging){
		const pagerText = Object.keys(paging)[0].includes('last') ? 'after' : 'before'; 
		url = `${REDDITURL}${name}.json?count=25&${pagerText}=${paging[Object.keys(paging)[0]]}`;
	} else {
		url = `${REDDITURL}${name}.json`;
	}
	return fetch(url)
		.then(res => {
			if(!res.ok) {
				return res.json()
					.then(data => {
						let err = {errorMessage: data.message};
						throw err;
					})
			}
			return res.json();
		})
}

export async function searchReddit(name) {
	let url;
	if(name){
		url = SEARCHURL;
	} else {
		url = SUBREDDITSURL;
	}
	return fetch(`${url}${name}`)
		.then(res => {
			if(!res.ok) {
				return res.json()
					.then(data => {
						let err = {errorMessage: data.message};
						throw err;
					})
			}
			return res.json();
		})
}