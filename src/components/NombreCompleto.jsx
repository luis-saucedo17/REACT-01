import React from "react";
import "../App.css";
import { EdadComponente } from "./EdadComponente";

export const NombreCompleto = (props) => {
  console.log("props", props);
  return (
    <>
      {" "}
      {/* React. Fragment */}
      <h3 className="Juan">{props.name}</h3>
      <EdadComponente age={props.age} show={props.show} />
    </>
  );
};

//export { NombreCompleto }
