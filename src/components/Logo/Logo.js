import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './brain.png';

const Logo = () => {
	return (
		<Tilt
			className='ma4 mt0 mb0 Tilt br2 shadow-2'
			options={{ max: 55 }}
			style={{ height: '150px', width: '150px' }}
		>
			<div className='Tilt-inner pa3'>
				<img style={{ paddingTop: '5px' }} src={brain} alt='logo' />{' '}
			</div>
		</Tilt>
	);
};

export default Logo;
