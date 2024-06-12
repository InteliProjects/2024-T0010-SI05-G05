import styled from "styled-components";

export const Container = styled.div`
    background-color: ${props => props.color};
    height: 80vh; /* Altura da viewport */
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 1rem;
    flex-direction: column;
    width: 33.33%; /* Definir o tamanho do container para 1/3 do tamanho horizontal */
`;

export const Title = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 35px;
    font-weight: light;
    margin-bottom: 3.5rem; /* Adicionado espaçamento entre o título e o primeiro formulário */
`;

export const Form = styled.form`
    font-weight: light;
    border-radius: 1.6rem;
    border: none;
    padding: 1rem;
    background-color: #D9D9D9;
    margin-bottom: 1rem; /* Adicionado espaço entre os formulários */
    width: 100%; /* Definir o tamanho do form para ocupar 100% do tamanho do container */
    height: 2rem; /* Definir a mesma altura para os formulários */
    display: flex; /* Tornar o formulário um flex container */
    align-items: center; /* Centralizar verticalmente o conteúdo do formulário */
`;

export const Input = styled.input`
    flex: 1; /* Faz a caixa de texto expandir e ocupar todo o espaço disponível */
    border: none;
    background-color: transparent; /* Torna o fundo transparente */
    font-size: 20px;
    outline: none; /* Remove a borda ao redor do input */
`;


export const StyledButton = styled.button`
    border-radius: 1.6rem;
    border: none;
    background-color: ${(props) => props.color};
    font-weight: semi-bold;
    color: #FFFFFF;
    cursor: pointer;
    width: 50%; /* Definir a largura dos botões para 45% do ButtonContainer */
    margin: 0.5rem; /* Aumentar o espaçamento entre os botões */
    height: 3rem; /* Definir a mesma altura para os botões */
    font-size: 20px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between; /* Distribui o espaço disponível entre os elementos */
    width: 100%; /* Definir o tamanho do ButtonContainer para ocupar 100% do tamanho do container */
`;
