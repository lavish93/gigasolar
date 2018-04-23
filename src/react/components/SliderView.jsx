import React from 'react';
//import logo from '../../static/images/logo.svg';
import SliderViewCss from '../css/SliderView.css'
import Slider from "react-slick";
import slideOne from "../../static/images/1.jpg"
import slideTwo from "../../static/images/2.jpg"
import slideThree from "../../static/images/3.jpg"

export default class SliderView extends React.Component {

  render() {
      let baseUrl = "../../static/images/";
    const settings = {
      dots: true,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 2
    };
    return (
      <div className={SliderViewCss.sliderDiv}>
        <Slider {...settings}>
          <div>
            <img src={slideOne} />
          </div>
          <div>
            <img src={slideTwo} />
          </div>
          <div>
            <img src={slideThree} />
          </div>
        </Slider>
      </div>
    );
  }
}

/*export default class SliderView extends React.Component {
  render() {
    const settings = {
      customPaging: function(i) {
        return (
          <a>
            <img src={`${baseUrl}${i + 1}.jpg`}/>
          </a>
        );
      },
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    let baseUrl = "../../static/images/";
    return (
      <div>
        <Slider {...settings}>
        <div className={SliderViewCss.slideOne}
        >
        </div><div className={SliderViewCss.slideTwo}
        >
        </div><div className={SliderViewCss.slideThree}
        >
        </div>

        </Slider>
      </div>
    );
  }
}*/
