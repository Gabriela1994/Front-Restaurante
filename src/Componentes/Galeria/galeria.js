import './galeria.css';
import gal1 from '../../Assets/Imagenes/gal-1.jpg'
import gal2 from '../../Assets/Imagenes/gal-2.jpg'
import gal3 from '../../Assets/Imagenes/gal-3.jpg'
import gal4 from '../../Assets/Imagenes/gal-4.jpg'

function Galeria() {
    return (
        <div className="contenedor-galeria">
            <div className = "box-galeria">
                <img src= {gal1} />
            </div>
            <div className = "box-galeria">
                <img src= {gal2} />
            </div>
            <div className = "box-galeria">
                <img src= {gal3} />
            </div>
            <div className = "box-galeria">
                <img src= {gal4} />
            </div>
        </div>
    );
}
export default Galeria;