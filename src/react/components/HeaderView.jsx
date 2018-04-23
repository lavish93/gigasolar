import React from 'react';
import { inject, observer } from 'mobx-react';
import HeaderViewCss from '../css/HeaderView.css'
import LogoView from './LogoView.jsx'
import MenuView from './MenuView.jsx'

@inject('menuStore')
@observer
export default class HeaderView extends React.Component {
	render(){
		return (<div className={HeaderViewCss.appHeader}>
							<table className={HeaderViewCss.headerTable}>
							<tbody>
							<tr className={HeaderViewCss.headerRow}>
								<td className={HeaderViewCss.headerLogo}><LogoView/></td>
								<td className={HeaderViewCss.headerName}></td>
								<td className={HeaderViewCss.headerMenus}><MenuView/></td>
							</tr>
							</tbody>
							</table>
			</div>);
	}

}
