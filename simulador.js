
// DECLARANDO VARIABLES 

let caffe = 1.10;
let capuccino = 1.80;
let lateMacchiato = 1.85;
let nombreUsuario = prompt("Ingrese su Nombre");
saludar();
let opcion = prompt("Ingrese su eleccion  1: Comprar  2: Finalizar compra 3: Terminar ");

while (opcion !=="3"){
    if(opcion === "1"){
    comprarProducto();
}
    if(opcion ==="2"){
    finalizarCompra();
    opcion = 3;
 }
}
alert("TE ESPERAMOS PROXIMAMENTE");



//FUNCION SALUDAR

function saludar() {
    alert("BIENVENIDO : " + nombreUsuario + "  , ahora puede escojer su compra");
    }



//FUNCION COMPRAR 
function comprarProducto(){
    producto = prompt("Elije tu compra 1: caffe  2: capuccino  3: late Macchiato ");

    if (producto === "1"){
        alert("Tu pedido es Caffe");
    }else if (producto === "2"){
        alert("Tu pedido es Capuccino");
    }else if (producto === "3"){
        alert("Tu pedido es Late Macchiato");
    }
    opcion = prompt("Ingrese una Opcion 2: Precio 3: Terminar");
}

//FUNCION FINALIZAR

function finalizarCompra(){
    if (producto==="1"){
        alert("Usted selecciono  Caffe  :" + caffe + "Euro");
    }else if (producto==="2"){
        alert("Usted selecciono  Capuccino  :" + capuccino + "Euro");
    }else if (producto==="3"){
        alert("Usted selecciono  Late Macchiato  :" + lateMacchiato + "Euro");
    }
    alert("Gracias por su compra")
}




