import { validarCampos, validarCamposPorId } from './generico.js';

const btnEnviar = document.getElementById('btnEnviar');

btnEnviar.onclick = () => {

    const checkBox = document.getElementById('checkBox');
 
    if(checkBox.checked){

        if(validarCampos()){
            var arregloDatos = document.getElementsByTagName("input");
            alert("Pronto nos pondremos en contacto");
        }

    }else{

        if(validarCamposPorId('formUno')){
            var arregloDatos = document.getElementsByTagName("input");
            alert("Pronto nos pondremos en contacto");
        }

    }      

}