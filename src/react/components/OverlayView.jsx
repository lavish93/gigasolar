import React from 'react';
import OverlayViewCss from '../css/OverlayView.css';
import HomeView from './HomeView.jsx';
import ServicesView from './ServicesView.jsx';
import AboutView from './AboutView.jsx';
import ProjectsView from './ProjectsView.jsx';
import ContactUsView from './ContactUsView.jsx';

export default class OverlayView extends React.Component {
	render(){
		return (<div className={OverlayViewCss.overlayDiv}>
				<HomeView/>
				<ServicesView/>
				<AboutView/>
				<ProjectsView/>
				<ContactUsView/>
			</div>);
	}
}
