import './header.css';

function Header() {
    return (
        <nav class="navbar container">
            <a href="/home" class="logo">
                <h1>Burguer-Lab</h1>
                <h3>Laboratorio gourmet de hamburguesas</h3>
            </a>
            <div class="menu">
                <ul class="lista">
                    <li>
                        <a href="/home">Inicio</a>
                    </li>
                    <li>
                        <a href="#">Menú</a>
                    </li>
                    <li>
                        <a href="#">Nuevo pedido</a>
                    </li>
                    <li>
                        <a href="/contacto">Contacto</a>
                    </li>
                    <li>
                        <a href="/administracion">Administrar</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Header;