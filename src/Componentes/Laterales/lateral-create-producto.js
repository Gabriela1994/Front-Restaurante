import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import '../../Componentes/administracion.css'
import CrearProducto from '../../Servicios/Productos/crear.productos';

export default function LateralCrearProducto() {
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
        >
        </Box>
        </Box>
    );

    return (
        <div>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button variant="contained" color="success" onClick={toggleDrawer(anchor, true)}>Crear</Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        >
                        {list(anchor)}
                        <CrearProducto />
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}