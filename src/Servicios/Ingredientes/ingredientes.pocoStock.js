import { useEffect, useState } from "react";
import * as React from 'react';
import PocoStock from '../../Componentes/Alertas/PocoStock.js'

var ingredientesPocoStock = [];


export const IngredientesConPocoStock = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:10404/api/ingredientes/lista-poco-stock");
                const data = await response.json();
                setData(ingredientesPocoStock = data);
            } catch (error) {
                console.error("Error fetching ingredientes:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <PocoStock ingredientes={ingredientesPocoStock} />
        </div>
    );
}