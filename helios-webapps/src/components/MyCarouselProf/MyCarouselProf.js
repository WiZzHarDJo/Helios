import React, { Component } from "react";

import Card from './../MyCard/MyCard.js';
import { Carousel } from "antd";
import _ from "lodash";
import { slickSlide, antCarousel } from './MyCarouselProf.scss';
import "antd/dist/antd.css";


class MyCarouselProf extends Component {
  renderContainer(container, index) {
    return (
      <div key={index} className={slickSlide}>
        <h1>
          { container.newspaper }
        </h1>
        <h2>
          { container.author }
        </h2>
        <p>
          { container.text }
        </p>
      </div>
    );
  }

  render() {
    const { frames, autoplay, title } = this.props;
    console.log("frames", frames)
    return (
      <Card title={title} noPadding>
        <Carousel className={antCarousel} autoplay={autoplay} autoplaySpeed={3000}>
          {_.map(frames, this.renderContainer)}
        </Carousel>
      </Card>
    );
  }
}

export default MyCarouselProf;