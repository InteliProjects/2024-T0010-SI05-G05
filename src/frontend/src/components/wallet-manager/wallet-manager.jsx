import React, {useState} from 'react';
import styles from './styles.module.scss'
import '../../global.scss'
import logo from '../../assets/logo.png'
import Contract from '../contract/contract';

function Walletmanager() {
    const [adress, setAdress] = useState('');
    const [name, setName] = useState('');

    function handleAdressChange(event) {
        setAdress(event.target.value);
    }

    function handleNameChange(event) {
        setName(event.target.value);
    }

    async function addWallet() {
        const contract = new Contract();
        try {
            let response = await contract.addUser(adress, name)
        
            if(response){
                alert("Wallet added successfully");
            } else {
                alert("Ocorreu um erro");
            }
        } catch {
            alert("Ocorreu um erro");
        }
        
    }

    async function deleteUser() {
        try {
            const contract = new Contract();
            if(await contract.deleteUser(adress)){
                alert("Wallet deleted successfully");
            } else {
                alert("Ocorreu um erro");
            }
        } catch {
            alert("Ocorreu um erro");
        }
    }
    
    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <div className={styles.picture}>
                    <img className={styles.logo} src={logo} alt="logo" />
                </div>
                <div className={styles.title}>
                    <h1>Gerenciador de Carteira</h1>
                </div>
            </div>
            <div className={styles.body}>
                <div className={styles.session}>
                    <div className={styles.subtitle}>
                        <h2>Gerenciar carteiras no contrato</h2>
                    </div>
                    
                    <div className={styles.operateWallet}>
                        <input className={styles.form} type="inteiro" placeholder='Endereço da carteira' onChange={handleAdressChange}/>
                        <input className={styles.form} type="texto" placeholder='nome'onChange={handleNameChange}/ >
                        
                        
                    </div>
                    <div className={styles.operateWallet}>

                        <button className={styles.removeButton} onClick={deleteUser}>
                            <p>Remover Carteira</p>
                        </button>
                        <button className={styles.operateButton} onClick={addWallet}>
                            <p>Adicionar Carteira</p>
                        </button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Walletmanager;
