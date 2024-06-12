import React from 'react';
import styles from './styles.module.scss'
import '../../global.scss'
import Cancel from '../../assets/Cancel.svg'
import Ok from '../../assets/Ok.svg'

function SearchIndex() {

    function redirectToPage() {
        window.location.href = '/Procurar';
    }

    function redirectToAll() {
        window.location.href = '/Visualizar';
    }

    return (
        <div className={styles.main}>
            <div className={styles.title}>
                <h1>Pesquisar transação por índice</h1>
            </div>
            <div className={styles.body}>
            <div className={styles.session}>
                    <input className={styles.form} type="texto" placeholder="Número do índice" />
                    <button className={styles.item}>
                        <p>Pesquisar</p>
                    </button>
                </div>
                <div className={styles.transaction}>
                    <div className={styles.info}>
                        <h3>Índice: 696969696969669</h3>
                        <p>Carteira do remetente: 0x1234567890</p>
                        <p>ID do Produto: 362368232</p>
                        <p>Preço unitário: 1000</p>
                        <p>Quantidade: 10</p>
                        <p>Local: Brazil</p>
                    </div>
                    <div className={styles.manage}>
                    <button className={styles.accept}>
                        <img className={styles.ok} src={Ok} alt="" />
                    </button>
                    <button className={styles.decline}>
                        <img className={styles.cancel} src={Cancel} alt="" />
                    </button>
                    </div>
                </div>
                {/* <div className={styles.confirm}>
                    <button className={styles.item}>
                        <p>Proposta</p>
                    </button>
                </div> */}
            </div>
        </div>
    );
}

export default SearchIndex;
