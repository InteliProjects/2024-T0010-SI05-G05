import React, { useState } from "react";
import { Button } from "./style";
import {toast} from "react-toastify";
import Contract from "../../services/contract";


function Connection() {
    const [login, setLogin] = useState(false); // Definindo login como um estado inicializado como falso

    async function connectMetamask() {
        if (window.ethereum) {
            try {
                const contract = new Contract();
                // Solicita ao usuário permissão para acessar a carteira Metamask
                await window.ethereum.enable();
                const isUser = await contract.isUser();

                if (isUser) {
                    setLogin(true);
                    console.log(login);
                    toast.success('Usuário conectado com sucesso!');
                    setTimeout(() => {
                        window.location.href = '/visualizar-cotação';
                    }, 1000);
                } else {
                    toast.error('Usuário não cadastrado!');
                }
            } catch (error) {
                console.log(error);
            }
        } else {
            toast.error('Instale o Metamask para continuar!');
        }
    }
    
    return (
        <>
            <Button onClick={connectMetamask}>CONECTAR</Button>
        </>
    );
}

export default Connection;
