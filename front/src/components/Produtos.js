import planta from '../img/Planta.jpg'
import styles from './css/Produtos.module.css'
import style from './css/Global.css'
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

function Produtos () {
    return(
        <>
            <div className={styles.container}>
                <div className={styles.cards}>
                    <img src={planta} />
                    <h3>Ficus Elástica | Pote Grande
                    </h3>
                    <p>R$119,90</p>
                    <ul>
                    <h1>R$79,90</h1>
                    <button><FaRegHeart /></button>
                    </ul>
                </div>

                <div className={styles.cards}>
                    <img src={planta} />
                    <h3>Ficus Elástica | Pote Grande
                    </h3>
                    <p>R$119,90</p>
                    <ul>
                    <h1>R$79,90</h1>
                    <button><FaRegHeart /></button>
                    </ul>
                </div>

                <div className={styles.cards}>
                    <img src={planta} />
                    <h3>Ficus Elástica | Pote Grande
                    </h3>
                    <p>R$119,90</p>
                    <ul>
                    <h1>R$79,90</h1>
                    <button><FaRegHeart /></button>
                    </ul>
                </div>
                
                <div className={styles.cards}>
                    <img src={planta} />
                    <h3>Ficus Elástica | Pote Grande
                    </h3>
                    <p>R$119,90</p>
                    <ul>
                    <h1>R$79,90</h1>
                    <button><FaRegHeart /></button>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Produtos