import React from 'react';
import ContactUsViewCss from '../css/ContactUsView.css';

export default class ContactUsView extends React.Component {

  render(){
    return (<div className={ContactUsViewCss.contactusDiv}>
              <iframe className={ContactUsViewCss.googleForm} src="https://docs.google.com/forms/d/e/1FAIpQLSfy66RiHeMSRla8RJBI2wwiyMqNQ6qu__Ox443isg9P-eNumQ/viewform?embedded=true"
              >Loading...</iframe>
    </div>);
  }
}
