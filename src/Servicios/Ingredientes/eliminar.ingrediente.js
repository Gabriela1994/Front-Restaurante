import { ObtenerIngredientes } from '../../Servicios/Ingredientes/listar.ingredientes'


export const EliminarIngrediente = async (objIngrediente) => {
    try {

        let id = objIngrediente.id;
        console.log(id)
        console.log(objIngrediente)

        const datos = ObtenerIngredientes();

        let objEncontrado = datos.find(o => o.id === parseInt(id))

        console.log(objEncontrado)

        if (objEncontrado) {
            await fetch("http://localhost:10404/api/ingredientes/eliminar/" + id, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            alert("Producto eliminado satisfactoriamente")
            window.location.reload();
        }
    }
    catch (error) {
        console.error("Error fetching data:", error);
    }
}