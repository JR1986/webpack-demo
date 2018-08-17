
import "react";
import "react-dom";
import "purecss";
import component from "./component";
import "./main.css";
import { bake } from "./shake";

bake();

document.body.appendChild(component());
