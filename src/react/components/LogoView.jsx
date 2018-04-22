import React from 'react';
import logo from '../../static/images/Logo.png';
import LogoViewCss from '../css/LogoView.css'

export default class LogoView extends React.Component {
	render(){
		return (<div className={LogoViewCss.logo}>
							<img src={logo} className={LogoViewCss.logoImage}/>	
			</div>);
	}

}
