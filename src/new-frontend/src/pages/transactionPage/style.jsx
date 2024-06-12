import styled from 'styled-components';

export const Page = styled.div`
  padding-top: 0vh; // Considerando a altura do Navbar
  font-family: 'Poppins', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Header = styled.h1`
  font-size: 24px;
  text-align: center;
  color: #333;
  margin-top: 80px;
  font-weight: 600;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%; 
  max-width: 500px; // Limita a largura do formulário
  height: 50px;
  margin-top: 20px
`;


export const Input = styled.input`
  font-size: 14px;
  font-weight: 300;
  color: #919191;
  height: 50px;
  padding: 15px;
  border: none;
  margin-bottom: 20px; // Espaço entre os campos de entrada
  border-radius: 10px;
  background-color: #D9D9D9;
`;

export const Button = styled.button`
  display: center;
  font-weight: 300;
  background-color: #2E4759; 
  width: 50%;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;

  display: block;
  margin-left: auto; 
  margin-right: auto; 

  &:hover {
    background-color: #555; // Mudança sutil na cor ao passar o mouse
  }
`;

// Lembre-se de importar a fonte Poppins em seu arquivo de entrada CSS ou diretamente na página
