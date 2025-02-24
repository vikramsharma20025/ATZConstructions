import React from 'react'
import Expertise from './Expertise/Expertise'
import Services from './Services/Services'
import AtA73Studio from './AtATZConstructions/AtATZConstructions'
import CommitedToSafety from './CommitedToSafety/CommitedToSafety'
import FeaturedProject from './FeaturesProject/FeaturedProject'

const Dashboard = () => {
	return (
		<div className='border border-black h-full w-full'>
			<Expertise />
			<Services />
			<AtA73Studio />
			<CommitedToSafety />
			<FeaturedProject />
		</div>
	)
}

export default Dashboard;
