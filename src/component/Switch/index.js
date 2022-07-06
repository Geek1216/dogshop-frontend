import React from "react";
import Select, { components } from "react-select";
import engflag from "../../images/engflag.png";
import jpflag from "../../images/jpflag.png";
import "../../styles/switer.scss";

const { SingleValue, Option } = components;

const IconSingleValue = (props) => (
  <SingleValue {...props}>
    <img
      src={props.data.image}
      style={{
        height: "17px",
        width: "24px",
        marginRight: "5px",
      }}
    />
    {props.data.label}
  </SingleValue>
);

const IconOption = (props) => (
  <Option {...props}>
    <img
      src={props.data.image}
      style={{
        height: "20px",
        width: "30px",
        marginRight: "10px",
      }}
    />
    {props.data.label}
  </Option>
);

const customStyles = {
  option: (provided) => ({
    ...provided,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  }),
  singleValue: (provided) => ({
    ...provided,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  }),
};

// const IconOption = (props) => (
//   <Option {...props}>
//     <img
//       src={props.data.icon}
//       width={30}
//       height={30}
//       style={{ marginRight: 10 }}
//     />
//     {props.data.label}
//   </Option>
// );

const options = [
  {
    label: "English",
    value: 1,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Great_Britain_%281707%E2%80%931800%29.svg/2560px-Flag_of_Great_Britain_%281707%E2%80%931800%29.svg.png",
  },
  {
    label: "Japan",
    value: 2,
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png",
  },
];

const Switch = ({ className }) => {
  return (
    <>
      <div className="translation-language-switer">
        <Select
          defaultValue={options[0]}
          styles={customStyles}
          components={{ SingleValue: IconSingleValue, Option: IconOption }}
          options={options}
        />
      </div>
    </>
  );
};

export default Switch;
