import React from "react";
import { link, withRouter } from "react-router-dom";
import "../css/reconocerelnombre.css";

const reconocerelnombre = (props) => {
  const { history } = props;
  return (
    <div>
      <center>
        <h1 className="Titulor">Reconocer el nombre</h1>
      </center>
      
      <center><div class="card1">
      <div class="card-body">
        <p class="card-text">
        <p class="card-text">
        COSAS BÁSICAS PARA EMPEZAR
Configure el entorno para que su perro tenga éxito comenzando a entrenar en un entorno tranquilo y silencioso, sin distracciones.
</p>
<p class="card-text2">
LA PRÁCTICA HACE LA PERFECCIÓN
Practique un mínimo de 10 veces al día, diga el nombre del perro (de 2 a 6 pies de distancia) y tan pronto como el perro lo mire, marque este comportamiento con un marcador como "sí" o un clicker y recompense con comida. o jugar mientras alaba mucho.
</p>
<p class="card-text3">
MANTENER EL ENFOQUE
No le pida al perro que se siente ni haga nada más antes de darle el premio, ya que la recompensa es por mirarlo cuando dice su nombre, no por cualquier otro comportamiento. Pronto notará que su perro comienza a ofrecer atención sin que se lo pida; Esté preparado para reforzar esto con una recompensa para alentar a su perro a que se comunique con usted regularmente.
     </p>
        </p>
      </div>
      </div></center>

      <button
            type="submit"
            className="btn2 btn-primary"
            onClick={() => history.push("echarse")}
          >
            SIGUIENTE
          </button>

    </div>
  );
};

export default reconocerelnombre;
