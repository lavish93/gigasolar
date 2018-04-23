import React from 'react';
import { inject, observer } from 'mobx-react';
import MenuViewCss from '../css/MenuView.css';
import Constants from '../util/Constants.jsx';

@inject('menuStore')
@observer
export default class MenuView extends React.Component {
	constructor(props){
		super(props);
	}
	handleMenuClick(menuName, event){
		if(event){
			console.log(menuName + "  clicked");
			this.props.menuStore.setSelectedMenu(menuName);
			event.stopPropagation();
		}
	}
	render(){
		return (<div className={MenuViewCss.menus}>
              <table className={MenuViewCss.ulMenu}>
              <tbody>
              <tr>
                <td><b className={MenuViewCss.menuButton} onClick ={(e) => this.handleMenuClick(Constants.MENU_HOME, e)}>Home</b></td>
                <td><b className={MenuViewCss.menuButton} onClick = {(e) => this.handleMenuClick(Constants.MENU_ABOUT, e)}>About</b></td>
                <td><b className={MenuViewCss.menuButton} onClick = {(e) => this.handleMenuClick(Constants.MENU_SERVICES, e)}>Services</b></td>
                <td><b className={MenuViewCss.menuButton} onClick = {(e) => this.handleMenuClick(Constants.MENU_PROJECTS, e)}>Projects</b></td>
                <td><b className={MenuViewCss.menuButton} onClick = {(e) => this.handleMenuClick(Constants.MENU_CONTACTUS, e)}>Contact Us</b></td>
              </tr>
              </tbody>
              </table>
			</div>);
	}

}
