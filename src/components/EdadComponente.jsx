import React from "react";
import "../App.css";
import PropTypes from "prop-types";

const myStyle = {
    ocultar: {
        display: "none"
    },
    mostrar: {
        display: "block",
        color: "green",
        backgroundColor: "wheat"
    }
}

export const EdadComponente = ({ age, show=true }) => {
  return (
    <>
      <p 
         className="Juan" 
         style={ show ?  myStyle.mostrar : myStyle.ocultar }>
        Mi edad es {age} años
      </p>
    </>
  );
};

EdadComponente.propTypes = {
  edad: PropTypes.number.isRequired,
};
