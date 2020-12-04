import React from "react";
import { link, withRouter } from "react-router-dom";
import "../css/dormirlugar.css";

const dormirlugar = (props) => {
  const { history } = props;
  return (
    <div>
      <center>
        <h1 className="Titulor">Dormir en su lugar</h1>
      </center>
      
      <center><div class="card4">
      <div class="card-body">
        <p class="card-text1">
          <h5> Elige una cama </h5>
        Elija una cama que le encantará a su perro. Si es un cachorro, es posible que desee una cama más pequeña, para que esté cómodo y cómodo. Si su perro se estira durante el sueño profundo, es posible que disfrute de una cama más grande.
        </p>
        <p class="card-text2">
<h5> Colocar e introducir </h5>
Elija un lugar perfecto para la cama de su cachorro y haga un gran problema con su perro al señalarlo. También puede colocar algunos juguetes favoritos cerca de la cama para que pueda masticar durante sus momentos de tranquilidad. Con una correa, lleve a su perro a su cama para presentarlo.
        </p>
        <p class="card-text">
<h5>   Mando </h5>
Dé una orden como 'vete a la cama' y arroje una golosina en su nueva cama y cuanddo lo haga dele un premio.
          </p>
          <p class="card-text">
Con éstos sencillos pasos logrará muy pronto el propósito con su cachorro.
</p>
      </div>
      </div></center>

      <button
            type="submit"
            className="button5"
            onClick={() => history.push("completonvlbasico")}
          >
            SIGUIENTE
          </button>

    </div>
  );
};

export default dormirlugar;