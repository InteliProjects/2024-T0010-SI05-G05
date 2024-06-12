import React, { useState } from 'react';
import Contract from '../../services/contract';
import { Card, CardContent, AcceptButton, RejectButton, ButtonContainer } from './style';
import {toast} from "react-toastify";

// assets
import Confirm from '../../assets/aceitar.svg'
import Reject from '../../assets/rejeitar.svg'

function TransactionCard({ transaction }) {
  const [isProcessing, setIsProcessing] = useState(false);
  const contract = new Contract();
  console.log(transaction)

  const handleAccept = async (event) => {
    setIsProcessing(true);
    try {
      const result = await contract.answerOnGoingTransaction(transaction.id, true);
      console.log('Transaction accepted:', result);
      toast.success("Transação aceita")
    } catch (error) {
      console.error('Erro ao aceitar transação:', error);
      alert('Erro ao aceitar transação');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleReject = async () => {
    setIsProcessing(true);
    try {
      const result = await contract.answerOnGoingTransaction(transaction.id, false);
      console.log('Transaction rejected:', result);
      
      alert('Transação rejeitada');
    } catch (error) {
      console.error('Erro ao rejeitar transação:', error);
      alert('Erro ao rejeitar transação');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Card>
      <CardContent>
        <div className="details">Carteira do remetente: {transaction.sender}</div>
        <div className="details">ID do produto: 2</div>
        <div className="details">Preço unitário: R$ 50</div>
        <div className="details">Quantidade: 15</div>
        <div className="details">Local: {transaction.transaction.local}</div>
      </CardContent>
      <ButtonContainer>
        <RejectButton onClick={handleReject} disabled={isProcessing}> 
          <img src={Reject} alt="Rejeitar" />
        </RejectButton>
        <AcceptButton onClick={handleAccept} disabled={isProcessing}>
          <img src={Confirm} alt="Aceitar" />
        </AcceptButton>
      </ButtonContainer>
    </Card>
  );
}

export default TransactionCard;
