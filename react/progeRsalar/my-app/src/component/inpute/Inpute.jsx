import React from "react";
import styled from "./inpute.module.css";

const Inpute = ({ lable, name, onChange }) => {
  return (
    <div className={styled.inputwrapper}>
      <label>{lable}</label>
      <input name={name} onChange={onChange} type="text" />
    </div>
  );
};

export default Inpute;
