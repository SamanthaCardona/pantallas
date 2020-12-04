import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Registro from "../components/Registro";
import Sesion from "../components/Sesion";
import Inicio from "../components/Inicio";
import Perros from "../components/Perros";
import Perfiles from "../components/Perfiles";
import Perfilperro from "../components/Perfilperro";
import Comenzar from "../components/Comenzar";
import entrenamientobasico from "../components/entrenamientobasico";
import reconocerelnombre from "../components/reconocerelnombre";
import sentarse from "../components/sentarse";
import necesidades from "../components/necesidades";
import dormirlugar from "../components/dormirlugar";
import completonvlbasico from "../components/completonvlbasico";
import entrenamientoavanzado from "../components/entrenamientoavanzado";
export default function Ppiconainer() {
  return (
    
    <BrowserRouter>
      <Route path="/Registro" exact component={Registro} />
      <Route path="/Sesion" exact component={Sesion} />
      <Route path="/Inicio" exact component={Inicio} />
      <Route path="/Perros" exact component={Perros} />
      <Route path="/Perfiles" exact component={Perfiles} />
      <Route path="/Perfilperro" exact component={Perfilperro} />
      <Route path="/Comenzar" exact component={Comenzar} /> 
      <Route path="/entrenamientobasico" exact component={entrenamientobasico} /> 
      <Route path="/reconocerelnombre" exact component={reconocerelnombre} /> 
      <Route path="/sentarse" exact component={sentarse} /> 
      <Route path="/necesidades" exact component={necesidades} />
      <Route path="/dormirlugar" exact component={dormirlugar} />
      <Route path="/completonvlbasico" exact component={completonvlbasico} />
      <Route path="/entrenamientoavanzado" exact component={entrenamientoavanzado} />
    </BrowserRouter>
  );
}
