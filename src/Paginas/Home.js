import Header from '../Componentes/Header/header.js'
import Presentacion from '../Componentes/Presentacion/presentacion.js'
import Contacto from '../Componentes/Conocenos/Conocenos.js'
import Galeria from '../Componentes/Galeria/galeria.js';
import Footer from '../Componentes/Footer/footer.js';


function PaginaHome() {
    return (
        <div>
            <Header />
            <Presentacion />
            <Contacto />
            <Galeria />
            <Footer />
        </div>
    );
}
export default PaginaHome;
