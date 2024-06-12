import {styled, createGlobalStyle} from 'styled-components';


// Estilizando o Container
export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%; /* A largura de cada contêiner é de 50% da largura total da tela */
    height: 100vh;
    background-color: ${(props) => props.color};
`;

export const Text = styled.h2`
    font-family: 'Poppins', sans-serif;
    font-size: 30px;
    font-weight: lighter;
    margin: 0;
`;

