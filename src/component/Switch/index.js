import React from "react";
import Select, { components } from "react-select";
import engflag from "../../images/engflag.png";
import jpflag from "../../images/jpflag.png";
import "../../styles/switer.scss";
const options = [
  { value: 1, label: "English", icon: engflag },
  { value: 2, label: "Japan", icon: jpflag },
];

const { Option } = components;
const IconOption = (props) => (
  <Option {...props} >
    <img src={props.data.icon} width={30} height={30} style={{marginRight: 10}}/>
    {props.data.label}
  </Option>
);

const Switch = ({ className }) => {
  return (
    <>

   <div className="translation-language-switer">
      <Select
        className={`${className}`}
        defaultValue={options[0]}
        options={options}
        components={{ Option: IconOption }}
      />

     </div>
</>
    
  );
};

export default Switch;
