import axios from "axios";
import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../../Componentes/administracion.css'
import Stack from '@mui/material/Stack';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AlertSuccess from '../../Componentes/Alertas/alert.success'

function AgregarIngrediente(ingrediente) {

    let baseURL = 'http://localhost:10404/api/ingredientes/crear';

    let objIngrediente = {
        nombre: ingrediente.nombre,
        precio: parseFloat(ingrediente.precio),
        stock: parseInt(ingrediente.stock)
    }

    axios
        .post(baseURL, objIngrediente)
        .then(response => {
            console.log("suceess")
            console.log(response)
        })
        .catch(error => {
            console.log("ocurrió un error")
            console.log(error)
        })
    }
    export default function CrearIngrediente() {
        
        const [formValues, setFormValues] = React.useState({
            nombre: '',
            precio: '',
            stock: ''
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
                    helperText="Ingresa el nombre del ingrediente"
                    id="nombre"
                    label="Nombre"
                    color="secondary"
                    value={formValues.nombre}
                    onChange={handleChange}
                    focused
                    />
                <TextField
                    helperText="Ingresa el precio del ingrediente"
                    id="precio"
                    label="Precio"
                    color="secondary"
                    value={formValues.precio}
                    onChange={handleChange}
                    focused
                    />
                <TextField
                    helperText="Ingresa el stock disponible"
                    id="stock"
                    label="Stock"
                    color="secondary"
                    value={formValues.stock}
                    onChange={handleChange}
                    focused
                    />
                <Stack direction="row" spacing={2}>
                    <Button onClick={() => AgregarIngrediente(formValues)} variant="outlined" startIcon={<AddCircleOutlineIcon />}>
                        Crear
                    </Button>
                </Stack>

            </Box>
        </Box>
    )
}