import React from 'react';
import styles from './styles.module.scss'
import '../../global.scss'
import logo from '../../assets/logo.png'

function Navbar() {
    return (
        <div className={styles.body}>
            <div className={styles.title}>
                <img className={styles.logo} src={logo} alt="logo" />
                <h2>Mitra</h2>
            </div>
            <div className={styles.links}>
                <a href="Adicionar">Adicionar <br/> transação</a>
                <a href="Pendentes">Transações <br/> pendentes</a>
                <a href="Cotação">Visualizar <br/> cotação</a>
                <a href="Gerenciar">Gerenciar <br/> usuários</a>
            </div>
        </div>
    );
}

export default Navbar;
