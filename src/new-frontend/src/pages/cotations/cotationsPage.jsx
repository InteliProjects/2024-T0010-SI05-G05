import React from "react";
import { Container, Text  } from "./style";

// components
import Navbar from "../../components/navbar/navbar";
import Cotation from "../../components/cotation/cotation";

function CotationPage() {
    return (
        <div>
            <Navbar></Navbar>
            <Cotation></Cotation>
        </div>

    );
}

export default CotationPage;