import React from 'react';
import logo from '../../static/images/logo.svg';
import HeaderCss from '../css/HeaderView.css'

export default class HeaderView extends React.Component {
	render(){
		return (<div className={HeaderCss.appHeader}>
					<img src={logo} className={HeaderCss.appLogo} alt="logo" />
					<h1 className={HeaderCss.appTitle}>Welcome to React</h1>
			</div>);
	}

}