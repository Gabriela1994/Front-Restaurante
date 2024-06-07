import { useEffect, useState } from "react";
import * as React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import LateralEditar from '../../Componentes/Laterales/lateral-edit.js'
import { EliminarIngrediente } from '../../Servicios/Ingredientes/eliminar.ingrediente.js'
import '../Ingredientes/servi.ingredientes.css';


let dataTodosIngredientes = [];

export function ObtenerIngredientes() {

    return dataTodosIngredientes;
}

export function ListarIngredientes2() {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:10404/api/ingredientes/lista");
                const data = await response.json();
                 dataTodosIngredientes = data;
                 console.log(dataTodosIngredientes)
            } catch (error) {
                console.error("Error fetching ingredientes:", error);
            }
        };
        fetchData();
    };
export const ListarIngredientes = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:10404/api/ingredientes/lista");
                const data = await response.json();
                setData(dataTodosIngredientes = data);
            } catch (error) {
                console.error("Error fetching ingredientes:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <table className="table-admin" border="1">
                <thead className="thead-admin">
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Stock</th>
                        <th>Disponibilidad</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((ingrediente, index) => (
                        <tr key={index}>
                            <td>{ingrediente.nombre}</td>
                            <td>{ingrediente.precio}</td>
                            <td>{ingrediente.stock}</td>
                            <td>{ingrediente.disponibilidad}</td>

                            <td className="td-acciones">
                                <LateralEditar ingrediente={ingrediente} />
                                <IconButton onClick={async () => EliminarIngrediente(ingrediente)} color="inherit">
                                    <DeleteIcon fontSize="inherit" />
                                </IconButton>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
