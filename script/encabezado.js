
import { validarCampos } from './generico.js';

const registraseBoton = document.getElementById('btnRegistrarse');
const iniciarSesionBoton = document.getElementById('btnIniciar');

iniciarSesionBoton.onclick = function (){
    var arregloDatos;
    console.log(document)
    if(validarCampos()){
        
        arregloDatos = document.getElementsByTagName("input");  
        console.log("Datos obtenidos")  ;
    }
}

registraseBoton.onclick = function(){
    window.open("./registrarse.html");
}