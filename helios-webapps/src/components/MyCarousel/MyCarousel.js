import React, { Component } from "react";

import Quote from "./../Typography/Quote.js";
import Quote100 from "./../Typography/Quote100.js";
import Card from './../MyCard/MyCard.js';
import { Carousel } from "antd";
import _ from "lodash";
import { slickSlide, antCarousel } from './MyCarousel.scss';
import "antd/dist/antd.css";


class MyCarousel extends Component {

  renderContainer(container, index) {
    return (
      <div key={index} className={slickSlide}>
        <div style={{ position: "relative", width: "100%", display:"flex", alignItems: "center", justifyContent: "center"}} /*className={classes.typo}*/>
          {
            'photo' in container &&
            (
            <>
            <img src={require(`./../../assets/img/${container.photo}`)} alt={container.alt} /*className={classes.pressImg}*//>
            <Quote
              text={container.text}
              author={container.author}
            />
            </>
            )
          }
          {
            !('photo' in container) &&
            (
            <Quote100
              text={container.text}
              author={container.author}
            />)
          }

          </div>
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

export default MyCarousel;




