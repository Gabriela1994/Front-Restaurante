import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CreateIngrediente from '../../Servicios/Ingredientes/crear.ingredientes.js';


export default function BotonCrear({ ingredientes }){

    console.log(ingredientes)
    debugger
    return (
        <Stack direction="row" spacing={2}>
            <Button onClick={() => {CreateIngrediente({ingredientes}); }} variant="outlined" startIcon={<AddCircleOutlineIcon />}>
                Crear
            </Button>
        </Stack>
    );
}