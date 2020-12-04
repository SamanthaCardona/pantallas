import React from "react";
import { link, withRouter } from "react-router-dom";
import "../css/completonvlbasico.css";

const completonvlbasico = (props) => {
  const { history } = props;
  return (
    <div>
      <center>
        <h2 className="Titulor">¡HAS CONSEGUIDO LOGRAR EL NIVEL BÁSICO!</h2>
      </center>
   <div className="centrado">
           <a title="index" href="index.html"><img src="img/trofeo.png" alt="index"/></a>
</div>
      <button
            type="submit"
            className="btn"
            onClick={() => history.push("Perfiles")}
          >
            SIGUIENTE
          </button>

    </div>
  );
};

export default completonvlbasico;