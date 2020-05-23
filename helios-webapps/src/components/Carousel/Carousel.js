import React from "react";
import _ from "lodash";

// react component for creating beautiful carousel
import Carousel from "react-slick";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "./../../components/Grid/GridContainer.js";
import GridItem from "./../../components/Grid/GridItem.js";
import Card from "./../../components/Card/Card.js";

import carouselStyle from "./../../assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";

const useStyles = makeStyles(carouselStyle);

export default function SectionCarousel(props){
  const classes = useStyles();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  const renderCarousel = (images, id) => {
    return (
      <div key={id}>
        <img src={require(`./../../assets/img/${images.img}`)} alt="First slide" className="slick-image" />
        <div className="slick-caption">
          <h4>
            {images.legend} <br/>
            {images.info}
          </h4>
        </div>
      </div>
    )
  }
  console.log(props.images)
  return (
    <div id="carousel">
      <div className={classes.container}>
        <GridContainer>
          <GridItem className={classes.marginAuto}>
            <Card>
              <Carousel {...settings}>
                {props.images.length && _.map(props.images, renderCarousel)}
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}