import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import EditNoteIcon from '@mui/icons-material/EditNote';
import Stack from '@mui/material/Stack';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import LlenarObjetoParaModificar from '../../Servicios/Ingredientes/editar.ingrediente.js'


export default function LateralEditar(props) {
    const [state, setState] = React.useState({
        right: false,
    });

    const [ingrediente, setIngrendiente] = React.useState(props.ingrediente)

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    function handleInput(e, key) {
        setIngrendiente({ ...ingrediente, [key]: e.target.value })
    }

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
        >

            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <br></br>
                <TextField
                    id="txtNombre"
                    label="Nombre"
                    color="secondary"
                    focused
                    value={ingrediente.nombre}
                    onChange={(e) => handleInput(e, "nombre")}
                />
                <TextField
                    id="txtPrecio"
                    label="Precio"
                    color="secondary"
                    focused
                    value={ingrediente.precio}
                    onChange={(e) => handleInput(e, "precio")}
                />
                <TextField
                    id="txtStock"
                    label="Stock"
                    color="secondary"
                    focused
                    value={ingrediente.stock}
                    onChange={(e) => handleInput(e, "stock")}
                />
                <Stack direction="row" spacing={2}>
                    <Button onClick={() => LlenarObjetoParaModificar(ingrediente)} variant="outlined" startIcon={<AddCircleOutlineIcon />}>
                        Editar
                    </Button>
                </Stack>
            </Box>
        </Box>
    );

    return (
        <div>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button className='button-adm' onClick={toggleDrawer(anchor, true)}>
                        <EditNoteIcon fontSize="inherit" />
                    </Button>

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