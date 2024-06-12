import React from "react";
import MITRA from "../../assets/MITRA.png";
import textMitra from "../../assets/textMitra.png";
import {Logo, Text, TextLogo} from "./style";

function BemVindo() {
    return (
        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            <Logo src={MITRA} alt="MITRA"/>
            <Text style={{marginTop:"30px"}}>SEJA BEM VINDO(A) AO</Text>
            <TextLogo src={textMitra} alt = "textMitra" style={{marginTop:"30px"}}/>
        </div>
    );
}

export default BemVindo;