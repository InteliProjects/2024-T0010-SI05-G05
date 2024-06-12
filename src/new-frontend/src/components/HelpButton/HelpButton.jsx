import {React, useState} from "react";
import {Help} from "./style";
import HelpModal from "./HelpModal";

function HelpButton() {
    const [help, setHelp] = useState(false);
    const [modal, setModal] = useState(false);

    function helpButton() {
        setHelp(!help);
        console.log(help);
        setModal(true);
    }

    return (
        <>
            <Help onClick={helpButton}>?</Help>
            {modal && <HelpModal closeModal={() => setModal(false)} />} {/* Renderizar o modal se o estado for verdadeiro */}
        </>
    );
}

export default HelpButton;
