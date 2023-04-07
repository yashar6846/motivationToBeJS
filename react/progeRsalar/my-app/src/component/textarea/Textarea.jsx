import React from "react";

import styled from "./textarea.module.css";

const Textarea = ({ lable, hanleChange }) => {
  return (
    <div className={styled.textareawrapper}>
      <label>{lable}</label>
      <textarea onChange={hanleChange}></textarea>
    </div>
  );
};

export default Textarea;
