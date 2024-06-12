import React from "react";
import BemVindo from "../../components/bemVindo/bemVindo";
import Connection from "../../components/connection/connection";
import HelpButton from "../../components/HelpButton/HelpButton";
import { Container, Text  } from "./style";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ConnectPage() {
    return (
        <div style={{display:"flex"}}>
            <Container color="#00000">
                <BemVindo />
            </Container>
            <Container color="#EA7221">
                <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", padding: "5px"}}>
                    <Text style={{color:"white", padding:"20px"}}>Conecte a sua carteira Metamask</Text>
                    <Connection style={{padding:"20px"}}/>
                    <HelpButton >?</HelpButton>
                </div>
            </Container>
            <ToastContainer />
        </div>

    );
}

export default ConnectPage;