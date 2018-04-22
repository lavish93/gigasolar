import React from 'react';
import FooterViewCss from '../css/FooterView.css'

export default class FooterView extends React.Component {
	render(){
		return (<div className={FooterViewCss.appFooter}>
							<table className={FooterViewCss.footerTable}>
							<tbody>
							<tr className={FooterViewCss.footerRow}>
								<td className={FooterViewCss.padding}></td>
								<td className={FooterViewCss.footerMenus}></td>
							</tr>
							</tbody>
							</table>
			</div>);
	}

}
