import React from "react";
import { link, withRouter } from "react-router-dom";




const Registro = (props) => {
  const { history } = props;
  return (
    <div>
      <div className="container">
      <img className="Logo" src="img/logo.png" alt="Logo" />
        <form action="/action_page.php" className="was-validated">
          <div className="form-group">
           <h3>Registrate: </h3>
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
            <label for="pwd">Correo:</label>
            <input
              className="form-control"
              id="pwd"
              placeholder="Ingresa correo"
              name="pswd"
              required
            />
            <div className="valid-feedback">Válido</div>
            <div className="invalid-feedback">
              Por favor rellene este campo.
            </div>
          </div>
          <div className="form-group">
            <label for="pwd">Contraseña:</label>
            <input
              type="password"
              className="form-control"
              id="pwd"
              placeholder="Ingresa contraseña"
              name="pswd"
              required
            />
            <div className="valid-feedback">Válido</div>
            <div className="invalid-feedback">
              Por favor rellene este campo.
            </div>
          </div>
          <div className="form-group form-check">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="checkbox"
                name="remember"
                required
              />{" "}
              Recuérdame.
              <div className="valid-feedback">Guardado.</div>
              <div className="invalid-feedback"></div>
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => history.push("/Perros")}
          >
            Registrarse
          </button>
          <button
            type="submit"
            className="btn btn-danger"
            onClick={() => history.goBack("/")}
          >
            Devolverse
          </button>
        </form>
      </div>
    </div>
  );
};

export default withRouter(Registro);
