import './Article.scss';
import OutlinedButton from '../../components/OutlinedButton';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { CheckBoxOutlineBlank } from '@mui/icons-material';

const Article = ({ data, loaded }) => {
	const id = useParams().id
	const article = data[id]

	return (
		<section className='article'>
			{loaded ?
			<div className='article-container'>
				<div className='image-container' >
					<img className='article-image' src={article.multimedia[0].url} />
				</div>
				<h1 className='image-copyright' >{article.multimedia[0].copyright}</h1>
				<div className='article-info'>
					<h1 className='byline' >{article.byline}</h1>
					<h1 className='byline' >Section: {article.section}</h1>
					<h1 className='article-title'>{article.title}</h1>
					<p className='article-abstract' >{article.abstract}</p>
					<OutlinedButton article={article} />
					<p>Published: {article.published_date}</p>
				</div>
			</div> 
			: null }
		</section>
	)
}

export default Article;