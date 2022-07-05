import React from "react";
import Banner from "../component/Banner";
import Footer from "../component/Footer";
import Header from "../component/Header/index.js";
import Section from "../component/Section";
import about1 from "../images/about1.png";
import about2 from "../images/about2.png";
import foot_2 from "../images/foot_2.png";
import foot_3 from "../images/foot_3.png";
import foot_4 from "../images/foot_4.png";
import bone1 from "../images/bone1.png";
import bone2 from "../images/bone2.png";
import dog_1 from "../images/dog_1.png";
import Box from "../images/inside-box.png";
import Faq from "../component/Faq";
import "../styles/home.scss";
import "../styles/signup.scss";
import logo from "../images/Logo.png";
import { Link } from "react-router-dom";
import w_d_f from "../images/w_d_f.svg";
import { AiOutlineUser } from "react-icons/ai";
import { TbShoppingCart } from "react-icons/tb";

import Testimonials from "../component/Section/Testimonilas.js";

const Home = () => {
  return (
    <div>
      <Header />
      <Link to="/">
        <img src={logo} className="home-mob-logo" alt="" />
      </Link>
      <div className="nav-btns3">
          <Link to="../pages/Signup.js" className="nav-item3">
            <AiOutlineUser />
          </Link>
          <Link to="../pages/Cart.js" className="nav-item3">
            <TbShoppingCart />
          </Link>
        </div>
      <Banner />
      <div id="whats" className="whats">
        <img src={dog_1} className="position-absolute top-0 left-0" />
        <div className="w_d_f">
          <img src={w_d_f} alt="" />
        </div>
        <div className="container position-relative">
          <h3 className="title text-primary text-center">What's Inside?</h3>
          <img
            src={foot_2}
            className="position-absolute top-0 end-0 foot-2-img"
          />
          <div className="inside-box">
            <img src={Box} alt="" />
          </div>
        </div>
      </div>
      <Section />
      <div id="about" className="about container position-relative">
        <div className=" position-relative">
          <div className="row mb-5 position-relative">
            <div className="col-lg-7">
              <h3 className="text-primary mb-4 item-h2">About PawPack</h3>
              <p className="fs-4 item-p">
                Paw Pack is a subscription box created by dog lovers for dogs
                (and the humans that love them)!
              </p>
              <p className="fs-4 item-p">
                In English, a ‘pack’ is not only defined as a box of items, but
                it also means a group or family of dogs. Through this
                subscription box, we want to connect dogs (and people) together
                from all over Japan to create our own ‘pack’ of subscribers!
              </p>
              <p className="fs-4 item-p">
                Our dogs are an important part of the family. Dog parents
                everywhere love spoiling their four legged companions by giving
                them treats and toys. But toys get chewed up, treats get eaten,
                and even though we are constantly replenishing these products,
                buying the same thing over and over again isn’t always exciting.
                That’s where a Paw Pack comes in.
              </p>
            </div>

            <div className="col-lg-5 item-img">
              <img src={about1} className="w-100" />
            </div>
          </div>
          <img src={bone1} className="position-absolute bottom-0 end-100" />
          <img
            src={foot_4}
            className="position-absolute end-0 top-100 translate-middle foot-1-img"
          />
        </div>
        <div className="story container position-relative">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h2 className="text-primary mb-5 item-h2">Our Story</h2>
              <p className="fs-4 mt-5 item-p">
                Paw Pack is a subscription box created by dog lovers for dogs
                (and the humans that love them)!
              </p>
              <p className="fs-4 item-p">
                In English, a ‘pack’ is not only defined as a box of items, but
                it also means a group or family of dogs. Through this
                subscription box, we want to connect dogs (and people) together
                from all over Japan to create our own ‘pack’ of subscribers!
              </p>
              <p className="fs-4 item-p">
                Our dogs are an important part of the family. Dog parents
                everywhere love spoiling their four legged companions by giving
                them treats and toys. But toys get chewed up, treats get eaten,
                and even though we are constantly replenishing these products,
                buying the same thing over and over again isn’t always exciting.
                That’s where a Paw Pack comes in.
              </p>
            </div>
            <div className="col-lg-5 item-img">
              <img className="w-100" src={about2} />
            </div>
          </div>
          <img
            src={foot_3}
            className="position-absolute start-0 top-100 foot-1-img"
          />
        </div>
        <a href="/" className="join d-block text-center position-relative">
          <button className="primary-btn join-btn">Join the Pack Today!</button>
        </a>
        <img
          src={bone2}
          className="position-absolute top-100 end-0 translate-start dog-bone-about-2"
        />
      </div>
      <Testimonials />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
