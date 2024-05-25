import Menu_Lateral from '../Componentes/Menu_Lateral/menu.lateral.js'
import Box from "@mui/material/Box";


export default function PaginaAdmiProductos() {
    return (
        <>
            <Box sx={{ display: "flex" }}>
                <Menu_Lateral />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <h2>Página de admi productos</h2>
                </Box>
            </Box>
        </>
    );
}