import React from 'react';
import styles from './styles.module.scss'
import '../../global.scss'
import Logo from '../../assets/logo.png'
import Github from '../../assets/github-icon.svg'

function Footer() {
    return (
        <div className={styles.body}>
            <div className={styles.content}>
                <div className={styles.link}>
                    <img className={styles.icon} src={Github} alt="github" />
                    <a href="https://github.com/">Github</a>
                </div>
            </div>
            <div className={styles.bottom}>
                <p>© Mitra.Todos os direitos reservados.</p>
            </div>
        </div>
    );
}

export default Footer;
