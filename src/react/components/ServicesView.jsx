import React from 'react';
import ServicesViewCss from '../css/ServicesView.css';
import Constants from '../util/Constants.jsx';
import AppUtils from '../util/AppUtils.jsx';
import Block from 'react-blocks';
import { Slide } from 'react-slideshow-image';
import Coverflow from 'react-coverflow';
import slide1 from '../../static/images/1.jpg';
import slide2 from '../../static/images/2.jpg';
import slide3 from '../../static/images/3.jpg';
import ReactListView from 'react-list-view';


export default class ServicesView extends React.Component {

  render(){
    let images = AppUtils.getSliderImages();
    return (<div className={ServicesViewCss.servicesDiv} id={Constants.MENU_SERVICES}>

          <Coverflow width="960" height="500"
          displayQuantityOfSide={3}
          navigation={true}
          enableScroll={false}
          clickable={true}
          active={0}
          >
          <img src={slide2} />
          <img src={slide3} />

          </Coverflow>
        
            </div>);
  }
}
