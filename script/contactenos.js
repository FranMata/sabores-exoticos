import { validarCampos } from './generico.js';

const btnEnviar = document.getElementById('btnEnviar');

btnEnviar.onclick = () => {
    if(validarCampos()){
        var arregloDatos = document.getElementsByTagName("input");
        alert("Pronto nos pondremos en contacto");
    }

}