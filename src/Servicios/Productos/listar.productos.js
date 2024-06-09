import { useEffect, useState } from "react";
import * as React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import LateralEditar from '../../Componentes/Laterales/lateral-edit.js'
import { EliminarIngrediente } from '../../Servicios/Ingredientes/eliminar.ingrediente.js'
import {ListarIngredientes2} from '../Ingredientes/listar.ingredientes.js'
import ListaDeCategorias from '../Categorias/listar.categorias.js'

let dataTodosProductos = [];

ListarIngredientes2()
ListaDeCategorias();

export function IngredientePorProducto(id){
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:10404/api/ingredientes/ingredientes-por-producto/${id}`);
                const data = await response.json();
            } catch (error) {
                console.error("Error fetching productos:", error);
            }
        };
        fetchData();
    }

export function ObtenerProductos() {

    return dataTodosProductos;
}

export const ListarProductos = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:10404/api/productos/lista");
                const data = await response.json();
                setData(dataTodosProductos = data);
                data.forEach(p => {
                    IngredientePorProducto(p.id)
                });

            } catch (error) {
                console.error("Error fetching productos:", error);
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
                        <th>Categoria</th>
                        <th>Descripcion</th>
                        <th>Ingredientes</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((producto, index) => (
                        <tr key={index}>
                            <td>{producto.nombre_producto}</td>
                            <td>{producto.precio}</td>
                            <td>{producto.nombre_categoria}</td>
                            <td>{producto.descripcion}</td>
                            <td>{producto.ingredientes.map((value) => value.nombre + ", ")}</td>


                            <td className="td-acciones">
                                <LateralEditar ingrediente={producto} />
                                <IconButton onClick={async () => EliminarIngrediente(producto)} color="inherit">
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