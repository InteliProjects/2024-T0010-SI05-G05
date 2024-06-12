import React from "react";
import "./style";
import { Body, LinksDiv, Logo, Link } from "./style";
import Mitra from "../../assets/logo.svg";

function Navbar() {
    return (
        <Body>
            <Logo src={Mitra}></Logo>
            <LinksDiv>
                <Link href="/visualizar-cotação" style={{textDecoration: "none", color: "white", margin: "10px", fontSize: "1.1vw"}}>Cotação</Link>
                <Link href="/transação" style={{textDecoration: "none", color: "white", margin: "10px", fontSize: "1.1vw"}}>Transação</Link>
                <Link href="/validação" style={{textDecoration: "none", color: "white", margin: "10px", fontSize: "1.1vw"}}>Validação</Link>
                <Link href="/manage-users" style={{textDecoration: "none", color: "white", margin: "10px", fontSize: "1.1vw"}}>Usuários</Link>
            </LinksDiv>
        </Body>
    );
}

export default Navbar;