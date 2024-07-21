import logo from '../img/logo.png'
import { Link } from 'react-router-dom'
import { IoPerson } from "react-icons/io5";
import { MdShoppingCart } from "react-icons/md";
import { IoPricetags } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import styles from './Navbar.module.css'
import style from './Global.css'

function Navbar () {

    return(
        <header className={styles.nav}>
            <img src={logo}/>
            <div className={styles.sub_nav}>
                <main>
                    <form>
                        <input type="text" placeholder="Busque por atributo, nome, marca..."/>
                        <button><FaSearch /></button>
                    </form>
                </main>
                <nav>
                    <a>INICIO</a>
                    <a>MEUS PEDIDOS</a>
                    <a>ATENDIMENTO</a>
                    <a>PLANTAS NATIVAS</a>
                </nav>
            </div>
            <div className={styles.nav_right}>
                <a title='Cupons promocionais'><IoPricetags /></a>
                <a title='Carrinho de compras'><MdShoppingCart /></a>
                <a title='Entre em sua conta'><IoPerson /></a>      
            </div>
        </header>
    )

}

export default Navbar