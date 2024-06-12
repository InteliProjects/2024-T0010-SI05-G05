import React from 'react';
import styles from './styles.module.scss'
import '../../global.scss'
import OneBill from '../../assets/one_bill.svg'
import AllBills from '../../assets/all_bill.svg'

function Transaction() {

    function redirectToPage() {
        window.location.href = '/Procurar';
    }

    function redirectToAll() {
        window.location.href = '/Visualizar';
    }

    return (
        <div className={styles.main}>
            <div className={styles.title}>
                <h1>Visualizar transações</h1>
            </div>
            <div className={styles.body}>
                <div className={styles.session}>
                    <div className={styles.icon}>
                        <img src={OneBill} alt="Visualizar uma proposta específica" />
                    </div>
                    <div className={styles.description}>
                        <h2>Pesquisar transação por índice</h2>
                    </div>
                    <div className={styles.confirm}>
                    <button className={styles.item} onClick={redirectToPage}>
                        <p>Pesquisar</p>
                    </button>
                </div>
                </div>
                <div className={styles.session}>
                    <div className={styles.icon}>
                        <img src={AllBills} alt="Visualizar todas as propostas" />
                    </div>
                    <div className={styles.description}>
                        <h2>Visualizar todas as transações</h2>
                    </div>
                    <div className={styles.confirm}>
                    <button className={styles.item} onClick={redirectToAll}>
                        <p>Visualizar</p>
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

export default Transaction;
