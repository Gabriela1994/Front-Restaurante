import * as React from 'react';
import { useState } from "react";
import axios from "axios";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import '../../Componentes/administracion.css'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { ObtenerIngredientes } from '../Ingredientes/listar.ingredientes'

import PositionedSnackbar from '../../Componentes/Alertas/alert.success'

function IngresarProducto(producto) {

    let baseURL = 'http://localhost:10404/api/productos/crear';

    axios
        .post(baseURL, producto)
        .then(response => {
            console.log("suceess")
            console.log(response)
            if(response.status === 200){
                console.log(response.status)
                }
                else{
                console.log(response.status)
            }
        })
        .catch(error => {
            console.log("ocurrió un error")
            console.log(error)
        })
}

const handleSubmit = (producto, ingredientes) => {

    let objProducto = {
        nombre_producto: producto.nombre,
        IdCategoria: 2,
        precio: parseFloat(producto.precio),
        ingredientes: ingredientes,
        descripcion: producto.descripcion,
    }

    console.log("Aqui esta el producto final")
    console.log(objProducto)
    console.log("Aqui esta el producto final")

    //Preparar el objeto con los datos a guardar.
    IngresarProducto(objProducto)

}

export default function LlenarArrayDeIngredientes() {

    const [ingredientesSeleccionados, setingredientesSeleccionados] = useState([]);

    const handleOnChange = (event) => {
        const { value, checked } = event.target;

        if (checked) {
            setingredientesSeleccionados([...ingredientesSeleccionados, parseInt(value)])
        } else {
            setingredientesSeleccionados(ingredientesSeleccionados.filter(o => o !== parseInt(value)))
        }
    }

    let listaIngredientes = ObtenerIngredientes();

    const [formValues, setFormValues] = React.useState({
        nombre: '',
        categoria: '',
        precio: '',
        descripcion: ''
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setFormValues({ ...formValues, [id]: value })
    }

    return (
        <Box
        sx={{ width: 200 || 300 }}
        role="presentation"
        >
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '30ch' },
                }}
            >
                <br></br>
                <TextField
                    helperText="Ingresa el nombre del producto"
                    id="nombre"
                    label="Nombre"
                    color="secondary"
                    value={formValues.nombre}
                    onChange={handleChange}
                    focused
                    required = {true}
                />

                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-helper-label" color="secondary">Categoría</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="categoria"
                        value={formValues.categoria}
                        label="Categoria"
                        onChange={handleChange}
                        color="secondary"
                        focused
                        required = {true}
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={1}>Hamburguesa de carne</MenuItem>
                    </Select>
                    <FormHelperText>Ingrese la categoria del producto</FormHelperText>
                </FormControl>
                
                <TextField
                    helperText="Ingresa el precio"
                    id="precio"
                    label="Precio"
                    color="secondary"
                    value={formValues.precio}
                    onChange={handleChange}
                    focused
                    required = {true}
                />
                <TextField
                    helperText="Ingresa una descripcion para el producto"
                    id="descripcion"
                    label="Descripción"
                    color="secondary"
                    value={formValues.descripcion}
                    onChange={handleChange}
                    focused
                    required = {true}
                />
                <FormControl component="fieldset">
                    <FormLabel component="legend">Elige los ingredientes</FormLabel>
                    <FormGroup aria-label="position">
                        {listaIngredientes.map((value) =>
                            <FormControlLabel
                                value={value.id}
                                control={<Checkbox />}
                                label={value.nombre}
                                color="secondary"
                                labelPlacement="end"
                                onChange={handleOnChange}
                            />
                        )}
                    </FormGroup>
                </FormControl>
                <Stack direction="row" spacing={2}>
                    <Button onClick={() => handleSubmit(formValues, ingredientesSeleccionados)} variant="outlined" startIcon={<AddCircleOutlineIcon />}>
                        Crear
                    </Button>
                </Stack>
            </Box>
        </Box>
    )
}