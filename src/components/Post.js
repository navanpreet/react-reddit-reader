import React from 'react';

const Post = ({title, url, score, author, domain, thumbnail}) => (
	<div>
		<div>
			<div className="col-sm-2"
				style={{
			        display: 'inline-block',
					maxWidth: '10%',
					float: 'left'
				}}
			>Score: {score}
			</div>
			<div
				className="col-sm-10"
				style={{
					border:'1px dotted black',
					marginBottom: '10px',
					maxWidth: '1000px',
					display: 'inline-block'
				}}
			>	
			<div style={{paddingLeft: '12%', width: '92%'}}>
				<a href={url}>{title}
				</a>
				<a style={{color:'grey'}} href={domain}>
					<span style={{float: 'right'}}>{domain}</span>
				</a>
			</div>		
			<br/>
			<span>By {author}
			</span>
			</div>
		</div>
	</div>
);

export default Post;