// import { Input } from "postcss";
import React from "react";
import ReactDOM from "react-dom";

function PhotoPicker({ onChange }) {
  const component = (
    <Input type="file" hidden id="photo-picker" onChange={onChange} />
  );
  return ReactDOM.createPortal(
    component,
    document.getElementById("photo-picker-element")
  );
}

export default PhotoPicker;
