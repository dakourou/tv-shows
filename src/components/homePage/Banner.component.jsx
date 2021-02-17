import { Carousel } from "react-responsive-carousel";
import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import notFound from "../../assets/notFound.png";
import { Typography } from "@material-ui/core";

export default function Banner(props) {
  return (
    //page banner including a carousel of 10 shows with high ratings as Featured with the option to click and see more information
    <div style={{ paddingTop: 70 }}>
      <Typography
        variant="h5"
        style={{
          marginLeft: "2%",
          textAlign: "left",
          color: "white",
          marginBottom: "2%",
        }}
      >
        Featured
      </Typography>
      {props.carouselImages.length>0 ? (<Carousel
        className="carousel-wrapper"
        infiniteLoop
        useKeyboardArrows
        autoPlay
        showIndicators={false}
        showThumbs={false}
      >
        {props.carouselImages.map((value, index) => {
          if (value)
            return (
              <Link key={index} to={`/shows/${value ? value.id : ""}`}>
                <div key={index} style={{ height: 600 }}>
                  <img
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "contain",
                    }}
                    src={
                      value.image && value.image.original
                        ? value.image.original
                        : notFound
                    }
                  />
                </div>
              </Link>
            );
        })}
      </Carousel>) : <></>}
      
    </div>
  );
}
