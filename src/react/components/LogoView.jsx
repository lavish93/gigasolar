import React from 'react';
import { inject, observer } from 'mobx-react';
import logo from '../../static/images/Logo.png';
import LogoViewCss from '../css/LogoView.css'
import Constants from '../util/Constants.jsx';

@inject('menuStore')
@observer
export default class LogoView extends React.Component {
	handleMenuClick(menuName, event){
		if(event){
			console.log(menuName + "  clicked");
			this.props.menuStore.setSelectedMenu(menuName);
			event.stopPropagation();
		}
	}
	render(){
		return (<div className={LogoViewCss.logo}>
							<img src={logo} className={LogoViewCss.logoImage} onClick ={(e) => this.handleMenuClick(Constants.MENU_HOME, e)}/>
			</div>);
	}

}
