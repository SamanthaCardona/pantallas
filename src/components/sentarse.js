import React from "react";
import { link, withRouter } from "react-router-dom";
import "../css/sentarse.css";

const sentarse = (props) => {
  const { history } = props;
  return (
    <div>
      <center>
        <h1 className="Titulor">Sentarse</h1>
      </center>
      
      <center><div class="card2">
      <div class="card-body">
        <p class="card-text">
        Agáchate frente a tu cachorro, sosteniendo un premio como señuelo. Coloque la golosina justo en frente de la nariz del cachorro, luego levante lentamente la comida por encima de su cabeza. Probablemente se sentará mientras levanta la cabeza para mordisquear la golosina. Permítale comer la golosina cuando su trasero toque el suelo. Repita una o dos veces con el señuelo de comida, luego retire la comida y use solo su mano vacía, pero continúe recompensando al cachorro después de que se siente. Una vez que comprenda la señal con la mano para sentarse, puede comenzar a decir "siéntese" justo antes de dar la señal con la mano.
        </p> 
      </div>
      </div></center>

      <button
            type="submit"
            className="btn3 btn-primary"
            onClick={() => history.push("necesidades")}
          >
            SIGUIENTE
          </button>

    </div>
  );
};

export default sentarse;
