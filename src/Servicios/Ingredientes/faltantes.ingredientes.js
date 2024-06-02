import { useEffect, useState } from "react";
import * as React from 'react';
import Faltantes from '../../Componentes/Alertas/Faltantes.js'

var ingredientesFaltantes = [];


export const IngredientesFaltantes = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:10404/api/ingredientes/lista-faltantes");
                const data = await response.json();
                setData(ingredientesFaltantes = data);
            } catch (error) {
                console.error("Error fetching ingredientes:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <Faltantes ingredientes={ingredientesFaltantes} />
        </div>
    );
}