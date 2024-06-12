import React, {useState} from 'react';
import styles from './styles.module.scss';
import '../../global.scss';
import logo from '../../assets/logo.png';
import Web3 from 'web3';
import Contract from '../contract/contract';


function Walletmanager() { // Adicione handleCheckUser como uma propriedade

    async function connectToMetamask() {
        if (window.ethereum) {
            try {
                const contract = new Contract();
                // Solicita ao usuário permissão para acessar a carteira Metamask
                await window.ethereum.enable();
                const isUser = await contract.isUser()
                console.log(isUser)
                if(isUser){ // Corrija o uso de handleCheckUser
                    window.location.href = '/Home';
                } else {
                    alert('Usuário não cadastrado!');
                }
            } catch (error) {
                alert("error at connect: "+ error);
            }
        } else {
            alert('Metamask não detectado!');
        }
    }
    
    return (
            <div className={styles.main}>
                <div className={styles.header}>
                    <div className={styles.picture}>
                        <img className={styles.logo} src={logo} alt="logo" />
                    </div>
                    <div className={styles.title}>
                        <h1>Bem vindo ao <span className={styles.name}>Mitra</span></h1>
                    </div>
                </div>
                <div className={styles.body}>
                    <div className={styles.session}>
                        <div className={styles.subtitle}>
                            <h2>Conecte sua carteira com o Metamask</h2>
                        </div>
                        <div className={styles.connectWallet}>
                            <button className={styles.walletButton} onClick={connectToMetamask}>
                              Conectar Carteira
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Walletmanager;
