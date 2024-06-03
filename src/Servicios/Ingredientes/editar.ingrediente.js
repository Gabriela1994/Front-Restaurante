import { ObtenerIngredientes } from '../../Servicios/Ingredientes/listar.ingredientes'

    export const EditarIngrediente = async (objIngrediente) => {
    try {
        let id = objIngrediente.id;
        
        let objParseado = {
            id: objIngrediente.id,
            nombre: objIngrediente.nombre,
            precio: parseFloat(objIngrediente.precio),
            stock: parseInt(objIngrediente.stock)
        }

        const datos = ObtenerIngredientes();
        let objEncontrado = datos.find(o => o.id === parseInt(id))
        if (objEncontrado) {
            const response = await fetch("http://localhost:10404/api/ingredientes/editar/", {

                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(objParseado),
            });
                const data = await response.json();
                return data;
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}