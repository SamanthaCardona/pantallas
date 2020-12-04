import React from "react";
import { link, withRouter } from "react-router-dom";
import "../css/necesidades.css";

const necesidades = (props) => {
  const { history } = props;
  return (
    <div>
      <center>
        <h3 className="Titulor">Donde hacer sus necesidades</h3>
      </center>
      
      <center><div class="card3">
      <div class="card-body">
        <p class="card-text1">
       <h5> No más pausas para ir al baño sin supervisión. </h5>
       La primera regla, y la más importante, para enseñarle a tu perro a orinar en un lugar es que tienes que supervisar. ¡No puedes dejar que tu perro salga al patio trasero sin un administrador!
</p>
<p class="card-text2">
  <h5> Vaya con correa al lugar para ir al baño. </h5>
  Para cada ocasión para ir al baño, deberá llevar a su perro con correa al lugar designado para ir al baño. Esto le permitirá llevar a su perro al área correcta. Si su perro corre libre, no puede controlar dónde finalmente hace sus necesidades.
</p>
<p class="card-text3">
<h5> No hay libertad hasta que esté vacío. </h5>
Pase el rato en el "área del baño" hasta que su perro orine o defeque. Puede recompensar a su perro por orinar con libertad 
</p>
<p class="card-text4">
<h5> Recompense cuando orine. </h5>
Si su perro orina en el lugar correcto, dele un premio y recompénselo dejándolo sin correa o saliendo a caminar. Es importante reservar la caminata divertida o el tiempo de juego para después de que su perro orine en su lugar.
</p>
      </div>
      </div></center>

      <button
            type="submit"
            className="btn4 btn-primary"
            onClick={() => history.push("dormirlugar")}
          >
            SIGUIENTE
          </button>

    </div>
  );
};

export default necesidades;
