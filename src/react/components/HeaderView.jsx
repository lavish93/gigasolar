import React from 'react';
import HeaderViewCss from '../css/HeaderView.css'
import LogoView from './LogoView.jsx'
import MenuView from './MenuView.jsx'

export default class HeaderView extends React.Component {
	render(){
		return (<div className={HeaderViewCss.appHeader}>
							<table className={HeaderViewCss.headerTable}>
							<tbody>
							<tr className={HeaderViewCss.headerRow}>
								<td className={HeaderViewCss.headerLogo}><LogoView/></td>
								<td className={HeaderViewCss.padding}></td>
								<td className={HeaderViewCss.headerMenus}><MenuView/></td>
							</tr>
							</tbody>
							</table>
			</div>);
	}

}
