export function validarCampos() {
    var elementos = document.getElementsByTagName('input');
    console.log(elementos.value);

    for(var i = 0; i<elementos.length;i++){
        // debugger;
        if(elementos[i].value == "" || elementos[i].value === null){
            alert("Debe llenar todos los campos");
            return false;
        }
    }
    return true;
}

export function validarCamposPorId(id) {
    var elementos = document.getElementById(id);
    console.log(elementos.value);

    for(var i = 0; i<elementos.length;i++){
        // debugger;
        if(elementos[i].value == "" || elementos[i].value === null){
            alert("Debe llenar todos los campos");
            return false;
        }
    }
    return true;
}





