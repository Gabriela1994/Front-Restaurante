import { useEffect, useState } from "react";
import * as React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import LateralEditar from '../../Componentes/Laterales/lateral-edit.js'
import {BorrarIngrediente} from '../../Servicios/Ingredientes/editar.ingrediente.js'

var dataTodosIngredientes = [];

export function ObtenerIngredientes() {
    
    return dataTodosIngredientes;
}

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
            <table className = "table-admin"border="1">
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
                                <IconButton onClick={() => BorrarIngrediente(ingrediente)} color="inherit">
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
