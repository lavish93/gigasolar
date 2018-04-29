import React from 'react';
import AboutViewCss from '../css/AboutView.css';
import Constants from '../util/Constants.jsx';

export default class AboutView extends React.Component {
  render(){
    let content = (<div><h1>GIGA SOLAR</h1>
      <h1>Giga Solar is a Solar Turnkey EPC company that provides state of the art Consulting-Engineering-Contracting-Commissioning services dedicated to development of Solar Roof Top Power Plants for residential, institutional and commercial setups.
Our focus is to provide the most cost efficient solution to the customers based on their average power consumption and maximize their return on investment. We have collaborated with some of the leading players in the solar power industry to deliver the best product and offer the finest after sales services to our customers.
With our team of skilled specialists, we are gradually increasing our foot print in the market and are helping numerous households and corporates across India garner the power of sun.
</h1></div>);
    return (<div className={AboutViewCss.aboutMenuDiv} id={Constants.MENU_ABOUT}>
{content}
    </div>);
  }
}
