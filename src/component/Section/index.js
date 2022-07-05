import React from "react";
import dog1 from "../../images/dog1.png";
import dog2 from "../../images/dog2.png";
import foot_1 from "../../images/foot_1.png";
import bg_3 from "../../images/bg_3.png";
import bg_4 from "../../images/bg_4.png";
import "../../styles/section.scss";
import f_r_foot from "../../images/f-r-foot.svg";
import t_c_foot from "../../images/t_c_foot.svg";
import l_d_bone from "../../images/l-d-bone.svg";
import l_d_dots from "../../images/l_d_dots.svg";
import l_d_dog from "../../images/l_d_dog.svg";

const sectionData = [
  {
    img: dog1,
    title: "Step1.Join",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    img: dog2,
    title: "Step2.Relax",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. .",
  },
  {
    img: dog1,
    title: "1.Be Happy",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. .",
  },
];

const Section = () => {
  return (
    <div>
      <img src={bg_3} className="w-100 my-n1" />
      <div className="section">
        <img src={f_r_foot} alt="" className="f-r-foot" />
        <img src={t_c_foot} alt="" className="t_c_foot" />
        <div className="l_d_bone">
          <img src={l_d_bone} alt="" />
        </div>
        <div className="l_d_dots">
          <img src={l_d_dots} alt="" />
        </div>
        <div className="l_d_dog">
          <img src={l_d_dog} alt="" />
        </div>
        <div className="container position-relative">
          <div className="section-content position-relative">
            <h1 className="section-title text-center">How It Works</h1>
            <div className="section-item">
              {sectionData.map((item, index) => (
                <div className="item position-relative" key={index}>
                  <div
                    className={`row align-items-center mt-4  ${
                      index % 2 === 1 ? "flex-row-reverse" : ""
                    }`}
                  >
                    <div className="col-lg-7 text-start">
                      <h2 className="title mb-3 item-h2">{item.title}</h2>
                      <p className="fs-4 lh-base item-p">{item.desc}</p>
                    </div>
                    <div className="col-lg-5">
                      <div className="position-relative text-center dog-bg item-img">
                        <img src={item.img} className="" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <img src={bg_4} className="w-100 my-n1" />
    </div>
  );
};

export default Section;
