import fundo from '../img/fundoplanta.png'
import styles from './css/Layout.module.css'
import style from './css/Global.css'

function Layout (){
    return(
        <>
            <div className={styles.layout}>
                <img src={fundo} />
                <div className={styles.desconto}>
                    <main>
                        <h2>Produtos por até</h2>
                        <h1>50%</h1>
                        <h3>de desconto</h3>
                    </main>
                    <nav>
                        <a>PROMOÇÕES</a>
                        |
                        <a>EM ALTA</a>
                        |
                        <a>MEU CARRINHO</a>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Layout