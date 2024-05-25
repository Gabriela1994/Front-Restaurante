import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ObtenerData from '../../Servicios/Ingredientes/crear.ingredientes.js'

export default function BotonCrear() {
    return (
        <Stack direction="row" spacing={2}>
            <Button onClick={()=> ObtenerData()} variant="outlined" startIcon={<AddCircleOutlineIcon />}>
                Crear
            </Button>
        </Stack>
    );
}