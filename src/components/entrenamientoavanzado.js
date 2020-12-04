import React from "react";
import { link, withRouter } from "react-router-dom";
import "../css/entrenamientoavanzado.css";

const entrenamientoavanzado = (props) => {
  const { history } = props;
  return (
    <div>
      <center>
        <h1 className="Tituloe">Entrenamiento avanzado</h1>
      </center>

      <div class="buttons">
        
          <ul>
          <button type="submit" className="botones" onClick={()=>history.push("/reconocerelnombre")}>
              Seguimiento sin correa.
            </button>
          </ul>
          <ul>
          <button type="submit" className="botones" onClick={()=>history.push("/sentarse")}>
            Traer objetos.
            </button>
          </ul>
          <ul>
          <button type="submit" className="botones" onClick={()=>history.push("/necesidades")}>
            Busqueda de objetos.
            </button>
          </ul>
          <ul>
          <button type="submit" className="botones" onClick={()=>history.push("/dormirlugar")}>
              De pie.
            </button>
          </ul>
      </div>
    </div>
  );
};

export default withRouter(entrenamientoavanzado);
