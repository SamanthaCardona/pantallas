import React from "react";
import { link, withRouter } from "react-router-dom";
import "../css/Perfiles.css";

const Perfilperro = (props) => {
  const { history } = props;
  return (
    <div>
      <center>
        <h1> Toby </h1>
      </center>
      <hr className="hr"></hr>
      <div className="Continer">
        <div className="info-hobby2">
          <a title="index" href="index.html" to="/">
            <img src="img/perro1.jpg" alt="index" />
          </a>
        </div>
      </div>

      <center>
        <h1 className="h1"> Logros </h1>
      </center>
      <div className="card border mb-3" Perfiles="max-width: 18rem;">
        <div className="card-body text-success">
          <center>
            <h5 className="card-title1">Básico</h5>
          </center>
          <p className="card-text"></p>
        </div>
      </div>

      <div className="card border mb-3" Perfiles="max-width: 18rem;">
        <div className="card-body text-success">
          <center>
            <h5 className="card-title2">Avanzado</h5>
          </center>
          <p className="card-text"></p>
        </div>
      </div>
      <div class="cont-buttons">
        <button
          type="submit"
          className="btn4 btn-primary"
          onClick={() => history.push("Perfiles")}
        >
          Evidencias
        </button>
        <button
          type="submit"
          className="btn4 btn-danger"
          onClick={() => history.push("/Comenzar")}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Perfilperro;
