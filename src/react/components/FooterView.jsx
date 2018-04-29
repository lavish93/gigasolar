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
								<td className={FooterViewCss.socialIcons}>
								<table className={FooterViewCss.footerTable}>
								<tbody>
								<tr>
									<td className={FooterViewCss.socialIconTwitter}>
										<SocialIcon title="twitter" network="twitter"/>
									</td>
									<td className={FooterViewCss.socialIconFacebook}>
										<SocialIcon title="facebook" network="facebook"/>
									</td>
									<td className={FooterViewCss.socialIconLinkedIn}>
										<SocialIcon title="linkedin" network="linkedin"/>
									</td>
									<td className={FooterViewCss.socialIconGPlus}>
										<SocialIcon title="linkedin" network="Google"/>
									</td>
									</tr>
									</tbody>
								</table>
								</td>
							</tr>
							</tbody>
							</table>
			</div>);
	}

}
