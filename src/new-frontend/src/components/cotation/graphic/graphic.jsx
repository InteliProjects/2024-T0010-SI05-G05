import React, { useState } from "react";
import styles from "./styles.module.scss";

//assets
import Dude from "../../../assets/mean-price-graphic.svg";

function Graphic ({visible, setVisible, id, name, average, state}) {



    if (visible) {
        return (
            <div className={styles.modal}>
                <div className={styles.header}>
                    <button className={styles.close} onClick={() => setVisible(false)}>X</button>
                </div>
                <div className={styles.graphic}>
                    <img className={styles.dude} src={Dude} alt="Grafico"/>
                </div>
                <div className={styles.info}>
                    <div className={styles.column}>
                        <h3>ID do produto: {id}</h3>
                        <h3>Preço Médio: {average}</h3>
                    </div>
                    <div className={styles.column}>
                        <p>Nome: {name}</p>
                        <p>Local: {state}</p>
                    </div>
                </div>
            </div>
        )
    }
};

export default Graphic;
