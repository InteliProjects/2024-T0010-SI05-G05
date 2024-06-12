import React from "react";
import { ModalContent, ModalOverlay, CloseButton, HelpText, HelpTitle } from "./style";

function HelpModal({ closeModal }) {
    return (
        <ModalOverlay>
            <ModalContent>
                <CloseButton onClick={closeModal}>X</CloseButton>
                <HelpTitle>O que é MetaMask?</HelpTitle>
                <HelpText>O MetaMask é uma carteira de criptomoeda popular e uma extensão de navegador que permite aos usuários interagir com a blockchain Ethereum. Ele funciona como uma ponte entre um navegador da web e a blockchain Ethereum, permitindo que os usuários gerenciem suas contas Ethereum, armazenem ativos baseados em Ethereum (como Ether e tokens ERC-20) e interajam com aplicativos descentralizados (DApps) diretamente do seu navegador.</HelpText>
                <HelpTitle>Por que conectar minha carteira MetaMask?</HelpTitle>
                <HelpText>Após o usuário conectar sua carteira MetaMask à plataforma Mitra, ele poderá aproveitar totalmente as funcionalidades da plataforma. Dessa forma, ele poderá desfrutar de uma experiência completa, permitindo-lhe realizar transações diretamente de sua própria carteira digital. Conectar a carteira MetaMask permite que ela compreenda e participe plenamente do processo de cotação de produtos, garantindo ao mesmo tempo segurança e confiabilidade em todas as suas interações na plataforma.</HelpText>
                <HelpTitle>Como a MITRA funciona?</HelpTitle>
                <HelpText>A plataforma MITRA é uma ferramenta desenvolvida para os usuários da Alliance, projetada para simplificar o processo de cotação de produtos. Os usuários inserem dados de suas transações, fornecendo detalhes como o ID do produto, preço, quantidade e local da transação. Em seguida, o MITRA coleta esses dados de transação e os agrega para formar um banco de dados abrangente dentro da rede da Alliance. Além disso, os usuários podem aproveitar o MITRA para consultar o preço médio de mercado de um produto específico, permitindo-lhes tomar decisões informadas sobre compra ou venda. Ao usar o MITRA, os usuários podem acessar informações de preços, tomar decisões informadas com base nas tendências de mercado atuais e contribuir para um ecossistema colaborativo de insights baseados em dados dentro da Alliance.</HelpText>
            </ModalContent>
        </ModalOverlay>
    );
};

export default HelpModal;
