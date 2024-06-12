import styled from 'styled-components';

export const Card = styled.div`
  background: #F5F5F5;
  border-radius: 8px;
  padding: 16px;
  margin: 10px;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  width: 360px; 
  font-family: 'Poppins', sans-serif;
`;

export const CardContent = styled.div`
  color: #333;

  .index {
    font-weight: 600; t
    font-size: 22px;
    margin-bottom: 12px; 
  }

  .details {
    font-weight: 300; 
    font-size: 14px;
    margin-bottom: 4px; 
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end; // Isso alinha os botões à direita
  gap: 10px; // Espaçamento entre os botões
`;

export const AcceptButton = styled.button`
  display: flex;
  background: none;
  border: none;
  padding: 0px;
  border-radius: 5px;
  cursor: pointer;
`;

export const RejectButton = styled.button`
  display: flex;
  background: none;
  border: none;
  padding: 0px;
  border-radius: 5px;
  cursor: pointer;
`;
