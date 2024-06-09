import Menu_Lateral from '../Componentes/Menu_Lateral/menu.lateral.js'
import Box from "@mui/material/Box";
import {ListarProductos} from '../Servicios/Productos/listar.productos.js'
import LateralCrearProducto from '../Componentes/Laterales/lateral-create-producto.js'


export default function PaginaAdmiProductos() {
    return (
        <>
            <Box sx={{ display: "flex" }}>
                <Menu_Lateral />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <div className='contenedor-administracion'>
                        <h2>Gestión de productos</h2>
                        <p>Acá puedes configurar todos tus productos.</p>
                    </div>

                        <div className='icon-crear'>
                            <LateralCrearProducto />
                        </div>
                    <ListarProductos />
                </Box>
            </Box>
        </>
    );
}