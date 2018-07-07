import React from "react";
import "./Exercice.css";

const Exercice = (props) => {

  const onClickHandler = (e) => {
    // SEE prvElementSibling
    props.deleteExercice(props.day, e.target.previousElementSibling.innerText);
  };

  const colors = ['#34495E', '#1BBC9B', '#9B58B5', '#3598DB', '#E74B3C', '#95A5A5'],
    secundaryColors = ['#2D3E50', '#16A086', '#8D44AD', '#2A80B9', '#BA3729', '#7E8C8D'];


  return (
    <div className="Exercice-Wrapper" style={{ backgroundColor: colors[props.index] }}>
      <div className="Exercice-Index-Wrapper" style={{ backgroundColor: secundaryColors[props.index] }}>
        <h3 className="Exercice-Index">
         { props.index }
        </h3>
      </div>
      <p className="Exercice-Name"> { props.name } </p>
      <small onClick={ onClickHandler } className="Exercice-Close">x</small>
    </div>
  );
};

export default Exercice;
