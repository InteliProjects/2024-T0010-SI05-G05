import styled from 'styled-components';

export const Page = styled.div`
  padding-top: 0vh; 
  font-family: 'Poppins', sans-serif;
`;

export const Header = styled.h1`
  font-size: 24px;
  text-align: center;
  color: #333;
  margin-top: 80px;
  margin-bottom: 20px; // Espaçamento entre o cabeçalho e os cards
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(360px, 1fr)); 
  grid-gap: 40px; 
  padding: 50px;
  justify-content: center;
  align-items: start; 
  margin-left: 90px;
  margin-right: 90px 

  @media (max-width: 1200px) { 
    grid-template-columns: repeat(2, minmax(335px, 1fr)); 
  }

  @media (max-width: 800px) { 
    grid-template-columns: 1fr; 
  }
`;
