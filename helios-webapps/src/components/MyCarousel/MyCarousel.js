import React, { Component } from "react";
import { Carousel, Icon } from "antd";

class MyCarousel extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.carousel = React.createRef();
  }
  next() {
    this.carousel.next();
  }
  previous() {
    this.carousel.prev();
  }

  render() {
    const props = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Icon type="left-circle" onClick={this.previous} />
        <Carousel ref={node => (this.carousel = node)} {...props}>
          <div>
            <h3>omega</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
        </Carousel>
        <Icon type="right-circle" onClick={this.next} />
      </div>
    );
  }
}

export default MyCarousel;

{/*import React, { Component } from "react";

import Card from './../MyCard/MyCard.js';
import { Carousel } from "antd";
import _ from "lodash";
import { slickSlide, antCarousel } from './MyCarousel.scss';

class MyCarousel extends Component {
  renderContainer(container, index) {
    return (
      <div key={index} className={slickSlide}>
        <h1>
          { container.title }
        </h1>
        <p>
          { container.content }
        </p>
      </div>
    );
  }

  render() {
    const { frames, autoplay, title } = this.props;
    return (
      <Card title={title} noPadding>
        <Carousel className={antCarousel} autoplay={autoplay} autoplaySpeed={15000}>
          {_.map(frames, this.renderContainer)}
        </Carousel>
      </Card>
    );
  }
}

export default MyCarousel; */}




