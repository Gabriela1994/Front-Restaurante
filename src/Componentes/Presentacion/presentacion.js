import '../body.css';
import BotonLlamado from '../BotonAccion'

function Presentacion() {
    return (
        <div className="presentacion">
            <div className='box1'>
                <h2>Burguer-Lab</h2>
                <h4>Despierta tus sentidos.</h4>
                <div className = "botones">
                    <BotonLlamado name = "Realizar pedido"/>
                </div>
            </div>
            <div className = "box2">
            </div>
        </div>
    );
}
export default Presentacion;
