import React from 'react';
import ReactDOM from 'react-dom';
import { inject, observer } from 'mobx-react';
import OverlayViewCss from '../css/OverlayView.css';
import HomeView from './HomeView.jsx';
import ServicesView from './ServicesView.jsx';
import AboutView from './AboutView.jsx';
import ProjectsView from './ProjectsView.jsx';
import ContactUsView from './ContactUsView.jsx';
import Constants from '../util/Constants.jsx';
import { FullPage, Slide } from 'react-full-page';

@inject('menuStore')
@observer
export default class OverlayView extends React.Component {
	constructor(props) {
        super(props);
	}

	onOverlayScroll(){
		let selectedMenu = this.props.menuStore.getSelectedMenu();

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

	getRefOnBasisOfSelectedMenu(){
		let selectedMenu = this.props.menuStore.getSelectedMenu();
		let ref;
		if(this.refs.length <= 0){
			return null;
		}
		switch (selectedMenu) {
			case Constants.MENU_HOME:
				ref = this.homeViewRef;
				break;
			case Constants.MENU_ABOUT:
				ref = this.aboutViewRef;
				break;
			case Constants.MENU_SERVICES:
				ref = this.servicesViewRef;
				break;
			case Constants.MENU_PROJECTS:
				ref = this.projectsViewRef;
				break;
			case Constants.MENU_CONTACTUS:
				break;
		}
		return ref;
	}

	render(){
		let viewToRender = this.renderViewOnSelectedMenu();
		let ref = this.getRefOnBasisOfSelectedMenu();
		if(this.refs){
		let node = ReactDOM.findDOMNode(this.refs.homeViewRef);}
		console.log(ref);

		return (<div className={OverlayViewCss.overlayDiv} id="OverlayDivId">
				<HomeView ref="homeViewRef"/>
				<AboutView ref="aboutViewRef"/>
				<ServicesView ref="servicesViewRef"/>
				<ProjectsView ref="projectsViewRef"/>
			</div>);
	}
}
