import Menu_Lateral from '../Componentes/Menu_Lateral/menu.lateral.js'
import '../Componentes/administracion.css'
import Box from "@mui/material/Box";
import 'animate.css';
import EggIcon from '@mui/icons-material/Egg';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';


export default function PaginaAdministracion() {
    return (
        <>
            <Box sx={{ display: "flex" }}>
                <Menu_Lateral />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>


                    <div className='contenedor-espaciador'>

                    </div>
                    <div className='contenedor-administracion'>
                        <h2>Bienvenido al panel de configuración</h2>
                    </div>

                    <div className='contenedor-grid-principal'>

                        <div className='box-administracion'>
                            <div className='icon-name'>
                                <h3 class='animate__animated animate__backInRight'>Ingredientes</h3>
                                <EggIcon fontSize='inherit' color='secondary' />
                            </div>
                            <span>Configuración de ingredientes</span>
                            <p>Acá podras configurar todo lo relacionado a tus ingredientes, como por ejemplo: visualizar que ingredientes existen, crear, editar y eliminar.</p>
                            <a className='BotonConfig' href="/admi-ingredientes">Configuración de ingredientes</a>
                        </div>
                        <div className='box-administracion'>
                            <div className='icon-name'>
                                <h3 class='animate__animated animate__backInRight'>Productos</h3>
                                <LunchDiningIcon fontSize='inherit' color='secondary' />
                            </div>
                            <span>Configuración de productos</span>
                            <p>Acá podras configurar todo lo relacionado a tus productos, como por ejemplo: visualizar que productos existen, crear, editar y eliminar.</p>
                            <a className='BotonConfig' href="/admi-productos">Configuración de productos</a>
                        </div>
                        <div className='box-administracion'>
                            <div className='icon-name'>
                                <h3 class='animate__animated animate__backInRight'>Pedidos</h3>
                                <DeliveryDiningIcon fontSize='inherit' color='secondary' />
                            </div>
                            <span>Configuración de pedidos</span>
                            <p>Acá podras configurar todo lo relacionado a tus pedidos.</p>
                            <br></br>
                            <br></br>
                            <a className='BotonConfig' href="/admi-pedidos">Configuración de pedidos</a>
                        </div>
                        <div className='box-administracion'>
                            <div className='icon-name'>
                                <h3 class='animate__animated animate__backInRight'>Usuarios</h3>
                                <ManageAccountsIcon fontSize='inherit' color='secondary' />
                            </div>
                            <span>Configuración de usuarios</span>
                            <p>Acá podras configurar todo lo relacionado a tus usuarios, como por ejemplo: agregar, editar o eliminar usuarios del sistema.</p>
                            <a className='BotonConfig' href="/admi-productos">Configuración de usuarios</a>
                        </div>


                    </div>













                </Box>
            </Box>
        </>
    );
}