import React from 'react';
import AppCss from '../css/AppView.css';
import HeaderView from './HeaderView.jsx';
import FooterView from './FooterView.jsx';
import OverlayView from './OverlayView.jsx';
import SliderView from './SliderView.jsx';
import AppUtils from '../util/AppUtils.jsx';

export default class AppView extends React.Component {
  constructor(){
    super();
    this.isMobileDevice = false;
    if (AppUtils.detectMobile()) {
        this.isMobileDevice = true;
        return;
    }
  }
  render() {
    return ((!this.isMobileDevice)?
            (<div className={AppCss.app}>
                <HeaderView className={AppCss.header}/>
                <OverlayView className={AppCss.overlay}/>
                <FooterView className={AppCss.footer}/>
              </div>):'');
  }
}
