import React from "react";
import { link, withRouter } from "react-router-dom";
import "../css/entrenamientobasico.css";

const entrenamientobasico = (props) => {
  const { history } = props;
  return (
    
    <div>
      <center>
        <h1 className="Tituloe">Entrenamiento básico</h1>
      </center>

      <div class="buttons">
         
          <ul>
          <button type="submit" className="botones" onClick={()=>history.push("/reconocerelnombre")}>
              Reconocer nombre
            </button>
          </ul>
          <ul>
          <button type="submit" className="botones" onClick={()=>history.push("/sentarse")}>
              Sentarse
            </button>
          </ul>
          <ul>
          <button type="submit" className="botones" onClick={()=>history.push("/necesidades")}>
              Donde hacer sus necesidades
            </button>
          </ul>
          <ul>
          <button type="submit" className="botones" onClick={()=>history.push("/dormirlugar")}>
              Dormir en su lugar
            </button>
          </ul>
      </div>
    </div>
  );
};

export default withRouter(entrenamientobasico);
