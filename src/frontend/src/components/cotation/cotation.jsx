import React from 'react';
import styles from './styles.module.scss'
import { useState } from 'react';
import '../../global.scss'

function Cotation() {
    const [id, setId] = useState('')
    const [cardId, setCardId] = useState('')
    const [mean, setMean] = useState('')
    const [showCard, setShowCard] = useState(false)

    function handleSetId(event) {
        setId(event.target.value)
    }

    async function handleButtonClick(event) {
        try {
            const response = await fetch('http://127.0.0.1:8000/?productId=' + id);
            const jsonData = await response.json();
            setCardId(id)
            if (jsonData.mean) {
                setMean(jsonData.mean)
                setShowCard(true)
                console.log(showCard)
            } else {
                setShowCard(false)
                alert("Esse produto não existe")
            }
            
          } catch (error) {
            console.error('Error fetching data:', error);
          }
    }

    if (showCard) {
        return (
            <div className={styles.main}>
            <div className={styles.title}>
                <h1>Visualizar cotação</h1>
            </div>
            <div className={styles.transaction}>
                <div className={styles.info}>
                    <h3>ID do Produto: {cardId}</h3>
                    <p>Nome do produto: Caneta azul</p>
                    <p>Preço médio <span className={styles.name}>R${mean.toFixed(2)}</span></p>
                    <p>Local: São Paulo</p>
                </div>
                <div className={styles.manage}>
                        <button className={styles.accept}>
                            <p>Visualizar gráfico</p>
                        </button>
                        </div>
            </div>
        </div>
        );
    }
    return (
        <div className={styles.main}>
        <div className={styles.title}>
            <h1>Visualizar cotação</h1>
        </div>
        <div className={styles.body}>
            <div className={styles.session}>
                <input onChange={handleSetId} className={styles.form} type="texto" placeholder="ID do Produto" />
            </div>
            <div className={styles.session}>
                <input className={styles.form} type="texto" placeholder="Local" />
            </div>
            <div className={styles.confirm}>
                <button onClick={handleButtonClick} type="enviar" className={styles.item}>
                    <p>Pesquisar</p>
                </button>
            </div>
        </div>
    </div>
    );
    
}

export default Cotation;
