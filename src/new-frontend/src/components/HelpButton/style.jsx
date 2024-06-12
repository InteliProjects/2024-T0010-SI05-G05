import styled from "styled-components";

export const Help = styled.button`
    background-color: transparent;
    border-radius: 50%;
    border: 2px solid #fff;
    color: #fff;
    font-size: 30px;
    width: 40px;
    cursor: pointer;
    position: absolute;
    bottom: 30px;
    right: 30px;

    &:hover {
        background-color: #fff;
        color: #EA7221;
    }
`;

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Cor de fundo semitransparente */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999; /* Z-index para garantir que o modal esteja acima do restante do conteúdo */
`;

export const ModalContent = styled.div`
    background-color: #EA7221;
    border-radius: 10px;
    padding: 40px;
    width: 80%;
    position: relative;
`;

export const CloseButton = styled.button`
    background-color: transparent;
    border: none;
    color: #fff;
    font-size: 30px;
    cursor: pointer;
    position: absolute;
    top: 15px;
    right: 15px;

    &:hover {
        color: #000;
    }
`;

export const HelpTitle = styled.h1`
    font-size: 25px;
    color: #fff;
    font-family: 'Poppins', sans-serif;
    font-weight: semi-bold;
`;

export const HelpText = styled.p`
    font-size: 20px;
    color: #fff;
    font-family: 'Poppins', sans-serif;
    font-weight: lighter;
`;