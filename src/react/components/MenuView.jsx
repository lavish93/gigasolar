import React from 'react';
import MenuViewCss from '../css/MenuView.css'

export default class MenuView extends React.Component {
	render(){
		return (<div className={MenuViewCss.menus}>
              <table className={MenuViewCss.ulMenu}>
              <tbody>
              <tr>
                <td className={MenuViewCss.homeMenu}>Home</td>
                <td className={MenuViewCss.aboutMenu}>About</td>
                <td className={MenuViewCss.servicesMenu}>Services</td>
                <td className={MenuViewCss.projectsMenu}>Projects</td>
                <td className={MenuViewCss.contactUsMenu}>Contact Us</td>
              </tr>
              </tbody>
              </table>
			</div>);
	}

}
