import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import BotonCrear from '../Botones/Boton-crear.js'
import '../../Componentes/administracion.css'
import Input from '@mui/material/Input';
import Stack from '@mui/material/Stack';
import CrearIngrediente from '../../Servicios/Ingredientes/crear.ingredientes.js'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AlertaSuccess from '../../Componentes/Alertas/snackBarSuccess';

export default function AnchorTemporaryDrawer() {
    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 300 }}
            role="presentation"
        >
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '30ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <br></br>
                <TextField
                    helperText="Ingresa el nombre del ingrediente"
                    id="txtNombre"
                    label="Nombre"
                    color="secondary"
                    focused
                />
                <TextField
                    helperText="Ingresa el precio del ingrediente"
                    id="txtPrecio"
                    label="Precio"
                    color="secondary"
                    focused
                />
                <TextField
                    helperText="Ingresa el stock disponible"
                    id="txtStock"
                    label="Stock"
                    color="secondary"
                    focused
                />
                <BotonCrear />
            </Box>
        </Box>

    );

    return (
        <div>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>Crear</Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}