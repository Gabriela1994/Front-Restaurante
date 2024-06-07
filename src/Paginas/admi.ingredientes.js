import Menu_Lateral from '../Componentes/Menu_Lateral/menu.lateral.js'
import Box from "@mui/material/Box";
import funci, { ListarIngredientes } from '../Servicios/Ingredientes/listar.ingredientes.js'
import '../Paginas/paginas.css'
import AnchorTemporaryDrawer from '../Componentes/Laterales/lateral-create.js'
import { IngredientesFaltantes } from '../Servicios/Ingredientes/faltantes.ingredientes.js'
import { IngredientesConPocoStock } from '../Servicios/Ingredientes/ingredientes.pocoStock.js'

export default function PaginaAdmiIngredientes() {
    return (
        <>
            <Box sx={{ display: "flex" }}>
                <Menu_Lateral />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <div className='contenedor-administracion'>
                        <h2>Gestión de ingredientes</h2>
                        <p>Acá puedes configurar todos tus ingredientes para usarlos luego en tus productos.</p>
                    </div>

                        <div className='icon-crear'>

                            <AnchorTemporaryDrawer />
                            <IngredientesFaltantes />
                            <IngredientesConPocoStock />
                        </div>
                    <ListarIngredientes />
                </Box>
            </Box>
        </>
    );
}