import React from 'react';
import AppCss from '../css/AppView.css';
import HeaderView from './HeaderView.jsx';
import FooterView from './FooterView.jsx';
import OverlayView from './OverlayView.jsx';

export default class AppView extends React.Component {
  render() {
    return (
      <div className={AppCss.app}>
        <HeaderView />
        <p className={AppCss.appIntro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <OverlayView />
        <FooterView />
      </div>
    );
  }
}
