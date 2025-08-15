import React from "react";
import Slider from "react-slick";

export const Header = (props) => {
  const images = [
    "img/intro-bg.jpg",
    "https://sasananurserymonastery.com/wp-content/uploads/2019/09/Slider.jpg",
    "img/intro-bg-2.jpg"
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    adaptiveHeight: false,
  };

  return (
    <header id="header">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <div
              className="intro"
              style={{
                background: `url(${img}) center center no-repeat`,
                backgroundSize: "cover",
                height: "100vh",
                width: "100vw", 
                overflow: "hidden", 
              }}
            >
              <div className="overlay">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-md-8 intro-text text-center">
                      <h2 className="title">
                        {props.data ? props.data.title : "Loading"}
                        <span></span>
                      </h2>
                      <p>{props.data ? props.data.paragraph : "Loading"}</p>
                      <a
                        href="#features"
                        className="btn btn-custom btn-lg page-scroll"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </header>
  );
};
