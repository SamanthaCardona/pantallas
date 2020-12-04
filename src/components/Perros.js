import React from "react";
import { link, withRouter } from "react-router-dom";




const Perros = (props) => {
  const { history } = props;
  return (
    <div>
      <div className="container">
        <img className="Logo" src="img/logo.png" alt="Logo" />
        <form action="/action_page.php" className="was-validated">
          <div className="form-group">
           <h3>Registrar mascota: </h3>
            <label for="uname">Nombre:</label>
            <input
              type="text"
              className="form-control"
              id="uname"
              placeholder="Ingresa nombre"
              name="uname"
              required
            />
            <div className="valid-feedback">Válido</div>
            <div className="invalid-feedback">
              Por favor rellene este campo.
            </div>
          </div>
          <div className="form-group">
            <label for="pwd">Edad:</label>
            <input
              className="form-control"
              id="pwd"
              placeholder="Ingresar edad"
              name="pswd"
              required
            />
            <div className="valid-feedback">Válido</div>
            <div className="invalid-feedback">
              Por favor rellene este campo.
            </div>
          </div>
          <div className="form-group">
            <label for="pwd">Raza:</label>
            <input
              type="password"
              className="form-control"
              id="pwd"
              placeholder="Ingresa raza"
              name="pswd"
              required
            />
            <div className="valid-feedback">Válido</div>
            <div className="invalid-feedback">
              Por favor rellene este campo.
            </div>
          </div>
          
          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => history.push("Perfiles")}
          >
            Registrar
          </button>
          <button
            type="submit"
            className="btn btn-danger"
            onClick={() => history.goBack("/Registro")}
          >
            Devolverse
          </button>
        </form>
      </div>
    </div>
  );
};

export default withRouter(Perros);