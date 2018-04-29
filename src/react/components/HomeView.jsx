import React from 'react';
import HomeViewCss from '../css/HomeView.css';
import Constants from '../util/Constants.jsx';

export default class HomeView extends React.Component {
  render(){
    return (<div className={HomeViewCss.homeMenuDiv} id={Constants.MENU_HOME}>
              </div>);
  }
}
