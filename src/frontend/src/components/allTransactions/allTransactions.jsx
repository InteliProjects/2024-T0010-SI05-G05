import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss'
import '../../global.scss'
import Cancel from '../../assets/Cancel.svg'
import Ok from '../../assets/Ok.svg'
import Contract from '../contract/contract';

// DROPDOWN IMPORTS

function AllTransactions() {
    const [transaction, setTransactions] = useState([])
    const [count, setCount] = useState(0)

    useEffect(()=> {
        if (count == 0) {
            getTransactions()
            setCount(1)
        }
    })

    async function getTransactions() {
        const contract = new Contract();
       
        let getSomething = await contract.getAllMyOnGoingTransactions()
        if (getSomething) {
            setTransactions(getSomething)
            console.log(getSomething) 
            console.log("transações carregadas")
        } else {
            alert("Ocorreu um erro")
        }
    }

    async function responseAboutAItem(event, id) {
        let type = event.target.dataset.type
        let decision = type == 'accept'
        
        const contract = new Contract();
        let getSomething = await contract.answerOnGoingTransaction(id, decision)
        if (getSomething) {
            console.log("Decisão realizada")
            alert("Decisão enviada com sucesso")
            window.location.reload(false);
        } else {
            alert("Ocorreu um erro")
        }
    }
    
    function redirectToPage() {
        window.location.href = '/Procurar';
    }

    function redirectToAll() {
        window.location.href = '/Visualizar';
    }

    var transactionsHTML = [];
    transaction.forEach((item) => {
        let id = String(item.transaction.transactionId)
        if (item.active) {
            transactionsHTML.push(
                <div className={styles.transaction} key={id}>
                <div className={styles.info}>
                    <h3>Index: {id}</h3>
                    <p>Sender wallet: {item.sender}</p>
                    <p>Product ID: {String(item.transaction.idProduct)}</p>
                    <p>Unit price: {String(Number(item.transaction.unitPrice).toFixed(2))}</p>
                    <p>Amount:  {String(Number(item.transaction.amount))}</p>
                    <p>Local:  {item.transaction.local}</p>
                </div>
                <div className={styles.manage}>
                <button className={styles.accept}>
                    <img onClick={(event) => {responseAboutAItem(event, id)}} className={styles.ok} src={Ok} data-type="accept" alt="" />
                </button>
                <button className={styles.decline}>
                    <img onClick={(event) => {responseAboutAItem(event, id)}} className={styles.cancel} src={Cancel} data-type="decline" alt="" />
                </button>
                </div>
            </div>
            );
        }

    }) 

    return (
        <div className={styles.main}>
            <div className={styles.title}>
                <h1>Ver todas as transações</h1>
            </div>
            
            <div className={styles.body}>
                {transactionsHTML}
            </div>
        </div>
    );
}

export default AllTransactions;
