import React from 'react'
import Expertise from './Expertise/Expertise'
import Services from './Services/Services'
import AtA73Studio from './AtA73Studio/AtA73Studio'

const Dashboard = () => {
	return (
		<div className='border border-black h-full w-full'>
			<Expertise />
			<Services />
			<AtA73Studio />
		</div>
	)
}

export default Dashboard