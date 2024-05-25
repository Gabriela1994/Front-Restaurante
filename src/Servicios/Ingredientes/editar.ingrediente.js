import $, { isEmptyObject } from 'jquery';
import { ObtenerIngredientes } from '../../Servicios/Ingredientes/listar.ingredientes'

let id = document.getElementById("thid")
let nombre = document.getElementById("txtNombre");
let precio = document.getElementById("txtPrecio");
let stock = document.getElementById("txtStock");
let obj = {};

var dataTodosIngredientes = [];

function ObtenerProductoPorId(id) {
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "http://localhost:50428/api/ingredientes/" + id,
        success: function (data) {
        }
    })
}

function ModificarIngrediente(id, obj) {
    $.ajax({
        type: "PUT",
        dataType: "json",
        data: obj,
        url: "http://localhost:10404/api/ingredientes/editar" + id,
        success: function (data) {
        }
    })
}

export default function LlenarLosDatosDelObjeto(ingrediente) {
    const datos = ObtenerIngredientes();

    let objEncontrado = datos.find(p => p.id === parseInt(ingrediente.id))  
}

function LlenarObjetoParaModificar() {

    obj = {
        nombre: nombre.value,
        precio: parseInt(precio.value),
        stock: parseInt(stock.value),
    }

    let objEncontrado = dataTodosIngredientes.some( o => o.id === parseInt(id.value))

    if (objEncontrado){
        ModificarIngrediente(id.value, obj)
        alert("Producto modificado satisfactoriamente")
    } else{
        alert("Este registro no existe")
    }
}