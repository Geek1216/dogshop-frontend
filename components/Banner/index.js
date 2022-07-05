import React from "react";
import { Carousel } from "react-bootstrap";
import "../../styles/banner.scss";
import { PrimaryBtn } from "../../UI";
import bannerBg1 from "../../images/bannerBg1.png";
import bannerBg2 from "../../images/bannerBg2.png";

const bannerData = [
  {
    title: "A monthly box of goodies for your furry best friend!",
    desc: "Paw Pack is an easy and convenient way to try new products for your dog! Each month, we will send you a box of unique toys, healthy treats, and cute bandana! All boxes are curated around a fun monthly theme, so you and your dog will never get bored! In addition, all contents are tested and approved by our own dogs, so you will never have to worry about product quality.",
    bg: bannerBg1,
  },
  {
    title: "Monthly box",
    desc: "Paw Pack is an easy and convenient way to try new products for your dog! Each month, we will send you a box of unique toys, healthy treats, and cute bandana! All boxes are curated around a fun monthly theme, so you and your dog will never get bored! In addition, all contents are tested and approved by our own dogs, so you will never have to worry about product quality.",
    bg: bannerBg2,
  },
];

const Banner = () => {
  return (
    <div>
      <Carousel className="banner">
        {bannerData.map((item) => {
          return (
            <Carousel.Item>
              <img className="d-block w-100" src={item.bg} alt="dog" />
              <Carousel.Caption>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <PrimaryBtn className={"d-block text-end"}>
                  Get Paw Pack
                </PrimaryBtn>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Banner;
