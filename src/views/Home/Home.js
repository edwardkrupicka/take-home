import './Home.scss';
import ResponsiveGrid from '../../components/Grid/Grid';
import React, { useState } from 'react';

const Home = ({ stories }) => {

	return (
		<section className='home-container'>
			<ResponsiveGrid stories={stories} />
		</section>
	)
}

export default Home;