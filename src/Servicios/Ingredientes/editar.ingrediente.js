import $, { isEmptyObject } from 'jquery';
import { ObtenerIngredientes } from '../../Servicios/Ingredientes/listar.ingredientes'

let obj = {};

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
        type: "POST",
        dataType: "json",
        data: obj,
        url: "http://localhost:10404/api/ingredientes/editar/" + id,
        success: function (data) {
        }
    })
}
function EliminarIngrediente(id) {
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "http://localhost:10404/api/ingredientes/eliminar/" + id,
        success: function (data) {
        }
    })
}

export default function LlenarObjetoParaModificar(ingrediente) {
    
    const datos = ObtenerIngredientes();
    
    obj = {
        nombre: ingrediente.nombre,
        precio: parseInt(ingrediente.precio),
        stock: parseInt(ingrediente.stock),
    }
    
    let objEncontrado = datos.find( o => o.id === parseInt(ingrediente.id))
    
    if (objEncontrado){
        ModificarIngrediente(ingrediente.id, obj)
        alert("Ingrediente modificado exitosamente")
        window.location.reload();
    } else{
        alert("Este registro no existe")
    }
}

export function BorrarIngrediente(ingrediente){
    
    const datos = ObtenerIngredientes();
    let objEncontrado = datos.find( o => o.id === parseInt(ingrediente.id))
    
    if (objEncontrado){
        EliminarIngrediente(objEncontrado.id)
        alert("Producto eliminado satisfactoriamente")
        window.location.reload();
    } else{
        alert("Este registro no existe")
    }
}