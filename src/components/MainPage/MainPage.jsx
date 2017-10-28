import React, { Component } from 'react';

import SectionOrder from './SectionOrder';
import './MainPage.css';

class MainPage extends Component {
	render() {
		return (
			<div className='main-page'>
				<div className='main-page__content'>
					<SectionOrder />
				</div>
			</div>
		);
	}
}

export default MainPage;
