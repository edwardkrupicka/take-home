import './Home.scss';
import Grid from '../../components/Grid/Grid';
import React, { useState } from 'react';

const Home = ({ stories, storySection }) => {

	return (
		<section className='home-container'>
			<Grid stories={stories} storySection={storySection} />
		</section>
	)
}

export default Home;