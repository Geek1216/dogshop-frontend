import React from "react";
import Slider from "react-slick";
import customer1 from "../../images/customer1.png";
import "../../styles/feedback.scss";

const Feedback = () => {
  const setting = {
    dots: false,
    infinite: true,
    speed: 500,
    slideToShow: 3,
    slideToScroll: 1,
    centerMode: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="feedback">
      <div className="container">
        <h4 className="title">Customers Feedback</h4>
        <div className="row">
          <Slider {...setting}>
            <img src={customer1} />
            <img src={customer1} />
            <img src={customer1} />
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
