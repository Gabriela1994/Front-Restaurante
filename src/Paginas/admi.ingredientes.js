import Menu_Lateral from '../Componentes/Menu_Lateral/menu.lateral.js'
import Box from "@mui/material/Box";
import funci, { ListarIngredientes } from '../Servicios/Ingredientes/listar.ingredientes.js'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import '../Paginas/paginas.css'
import AnchorTemporaryDrawer from '../Componentes/Laterales/lateral-create.js'


export default function PaginaAdmiIngredientes() {
    return (
        <>
            <Box sx={{ display: "flex" }}>
                <Menu_Lateral />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <div className='contenedor-administracion'>
                        <h2>Panel de configuración de ingredientes</h2>
                    </div>


                    <div className='contenedor-grid-secundario'>

                        <div className='seccion-crear'>
                            <div className='icon-crear'>
                                <AnchorTemporaryDrawer />
                                
                            </div>
                        </div>
                    </div>
                    <ListarIngredientes />
                </Box>
            </Box>
        </>
    );
}