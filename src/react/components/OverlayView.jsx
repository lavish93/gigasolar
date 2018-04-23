import React from 'react';
import { inject, observer } from 'mobx-react';
import OverlayViewCss from '../css/OverlayView.css';
import HomeView from './HomeView.jsx';
import ServicesView from './ServicesView.jsx';
import AboutView from './AboutView.jsx';
import ProjectsView from './ProjectsView.jsx';
import ContactUsView from './ContactUsView.jsx';
import Constants from '../util/Constants.jsx';

@inject('menuStore')
@observer
export default class OverlayView extends React.Component {
	constructor(props) {
        super(props);
	}
	renderViewOnSelectedMenu(){
		let selectedMenu = this.props.menuStore.getSelectedMenu();
		console.log(selectedMenu);
		let viewToRender;
		switch (selectedMenu) {
			case Constants.MENU_HOME:
				viewToRender = (<HomeView />);
				break;
			case Constants.MENU_ABOUT:
				viewToRender = (<AboutView />);
				break;
			case Constants.MENU_SERVICES:
				viewToRender = (<ServicesView />);
				break;
			case Constants.MENU_PROJECTS:
				viewToRender = (<ProjectsView />);
				break;
			case Constants.MENU_CONTACTUS:
				viewToRender = (<ContactUsView />);
				break;
		}
		return viewToRender;
	}

	render(){
		let viewToRender = this.renderViewOnSelectedMenu();
		return (<div className={OverlayViewCss.overlayDiv}>
				{viewToRender}
			</div>);
	}
}
