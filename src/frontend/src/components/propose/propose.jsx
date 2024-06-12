import React, {  useState } from 'react';
import styles from './styles.module.scss'
import '../../global.scss'
import Contract from '../contract/contract';

function Propose() {
    const [data, setData] = useState({
        "address": "",
        "id": "",
        "price": "",
        "amount": "",
        "local": ""
    })

    function handleSetData(event) {
        let target = event.target
        let value = target.value
        let type = target.dataset.type
        data[type] = value
        setData(data)
    }

    async function handleSubmit(_) {
        const contract = new Contract();
        let error = false
        Object.keys(data).forEach((key) => {
            if (data[key] == '') {
                console.log(key)
                error = true
                return;
            }
        })
        if (error) {
            alert("Preencha todos os campos: ")
            return
        }
        
        let getSomething = await contract.insertTransaction(data)
        console.log(getSomething)
        if (getSomething) {
            alert("Transação adicionada");
        } else {
            alert("Ocorreu um erro")
        }
    }

    return (
        <div className={styles.main}>
            <div className={styles.title}>
                <h1>Adicionar uma nova transação</h1>
            </div>
            <div className={styles.body}>
                <div className={styles.session}>
                    <input onChange={handleSetData} data-type="address"  className={styles.form} type="texto" placeholder="Carteira do destinatário" />
                </div>
                <div className={styles.session}>
                    <input onChange={handleSetData} data-type="id" className={styles.form} type="texto" placeholder="ID do Produto" />
                </div>
                <div className={styles.session}>
                    <input onChange={handleSetData} data-type="price" className={styles.form} type="texto" placeholder="Preço unitário" />
                </div>
                <div className={styles.session}>
                    <input onChange={handleSetData} data-type="amount" className={styles.form} type="texto" placeholder="Quantidade" />
                </div>
                <div className={styles.session}>
                    <input onChange={handleSetData} data-type="local" className={styles.form} type="texto" placeholder="Local" />
                </div>
                <div className={styles.confirm}>
                    <button onClick={handleSubmit} className={styles.item}>
                        <p>Enviar</p>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Propose;
