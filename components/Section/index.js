import React from "react";
import dog1 from "../../images/dog1.png";
import dog2 from "../../images/dog2.png";
import foot_1 from "../../images/foot_1.png";
import bg_3 from "../../images/bg_3.png";
import bg_4 from "../../images/bg_4.png";
import "../../styles/section.scss";

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
