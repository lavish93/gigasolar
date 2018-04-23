import React from 'react';
import FooterViewCss from '../css/FooterView.css'
import { SocialIcon } from 'react-social-icons';

export default class FooterView extends React.Component {
	render(){
		return (<div className={FooterViewCss.appFooter}>
							<table className={FooterViewCss.footerTable}>
							<tbody>
							<tr className={FooterViewCss.footerRow}>
								<td className={FooterViewCss.padding}></td>
								<td className={FooterViewCss.footerMenus}></td>
								<td>
								<td>
								<SocialIcon className={FooterViewCss.socialIcons} title="twitter" network="twitter"/>
								</td><td>
								<SocialIcon className={FooterViewCss.socialIcons} title="facebook" network="facebook"/>
								</td><td><SocialIcon className={FooterViewCss.socialIcons} title="linkedin" network="linkedin"/></td>
								</td>
							</tr>
							</tbody>
							</table>
			</div>);
	}

}
