import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import LlenarObjetoParaModificar from '../../Servicios/Ingredientes/editar.ingrediente.js'

export default function BotonCrear() {
    return (
        <Stack direction="row" spacing={2}>
            <Button onClick={()=> LlenarObjetoParaModificar()} variant="outlined" startIcon={<AddCircleOutlineIcon />}>
                Editar
            </Button>
        </Stack>
    );
}