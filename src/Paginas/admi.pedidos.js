import Menu_Lateral from '../Componentes/Menu_Lateral/menu.lateral.js'
import Box from "@mui/material/Box";


export default function PaginaAdmiPedidos() {
    return (
        <>
            <Box sx={{ display: "flex" }}>
                <Menu_Lateral />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <h2>Página de admi pedidos</h2>
                </Box>
            </Box>
        </>
    );
}