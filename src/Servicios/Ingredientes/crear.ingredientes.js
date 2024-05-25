import $, { isEmptyObject } from 'jquery';
import AlertaSuccess from '../../Componentes/Alertas/snackBarSuccess';

function CrearIngrediente(obj) {
    $.ajax({
        type: "POST",
        dataType: "json",
        data: obj,
        url: "http://localhost:10404/api/ingredientes/crear",
        success: function (data) {
            alert("Ingrediente agregado correctamente"); //deberia ir un mensajito lindo con material ui, crear este componente
            window.location.reload();
        }
    })
}

export default function ObtenerData() {

    let nombre = document.getElementById("txtNombre");
    let precio = document.getElementById("txtPrecio");
    let stock = document.getElementById("txtStock");
    let obj = {};

    if (nombre && precio && stock != null) {
        obj = {
            nombre: nombre.value,
            precio: parseInt(precio.value),
            stock: parseInt(stock.value)
        }
        CrearIngrediente(obj);
        <AlertaSuccess />
    } else {
        alert("Debes ingresar todos los datos")
        return null;
    }
}
