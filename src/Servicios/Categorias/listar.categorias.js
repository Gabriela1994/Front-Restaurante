import * as React from 'react';
import { useState } from "react";

let listaCategorias = [];

export function ObtenerCategorias() {
    return listaCategorias;
}

export default function ListaDeCategorias() {
    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:10404/api/categoria/lista");
            const data = await response.json();
            listaCategorias = data;

        } catch (error) {
            console.error("Error fetching categorias:", error);
        }
    };
    fetchData();
};