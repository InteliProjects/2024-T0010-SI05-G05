import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Navbar from '../../components/navbar/navbar'; 
import TransactionCard from '../../components/TransactionCard/transactionCard';
import { Page, Grid, Header } from './style'; 
import Contract from '../../services/contract';
import { ToastContainer } from 'react-toastify';

function ValidationPage() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {

    const fetchTransactions = async () => {
      try {
        const contract = new Contract();
        const transactions = await contract.getAllMyOnGoingTransactions();
        if (transactions) {
          setTransactions(transactions);
          console.log(transactions)
        } else {
          toast.error('Falha ao buscar transações pendentes.');
        }
      } catch (error) {
        console.log(error)
        toast.error('Erro ao conectar com o contrato.');
      }
    };

    fetchTransactions();
  }, []);
  
  return (
    <Page>
      <Navbar />
      <Header>Validar transações</Header>
      <Grid>
        {transactions.map((transaction, key) => (
          <TransactionCard key={key} transaction={transaction} />
        ))}
      </Grid>
      <ToastContainer />
    </Page>
  );
}

export default ValidationPage;
