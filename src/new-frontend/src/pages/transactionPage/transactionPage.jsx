import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Navbar from '../../components/navbar/navbar';
import Contract from '../../services/contract';
import { Page, Form, Input, Button, Header } from '../transactionPage/style'; 
import { ToastContainer } from 'react-toastify';


function TransactionsPage() {
  const [formData, setFormData] = useState({
    address: '',
    productId: '',
    price: '',
    amount: '',
    local: ''
  });

  const contract = new Contract();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await contract.insertTransaction({
      ...formData,
      id: parseInt(formData.productId),
      price: parseFloat(formData.price),
      amount: parseInt(formData.amount),
    });
  
    if (response) {
        toast.success('Transação adicionada com sucesso!');
        setFormData({
          address: '',
          productId: '',
          price: '',
          amount: '',
          local: ''
        });
      } else {
        toast.error('Falha ao adicionar transação.');
      }
    };

  return (
    <Page>
      <Navbar />
      <Header>Registrar transação</Header>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Endereço"
        />
        <Input
          type="text"
          name="productId"
          value={formData.productId}
          onChange={handleChange}
          placeholder="ID do produto"
        />
        <Input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Preço unitário"
        />
        <Input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          placeholder="Quantidade"
        />
        <Input
          type="text"
          name="local"
          value={formData.local}
          onChange={handleChange}
          placeholder="Local"
        />
        <Button type="submit">Adicionar</Button>
      </Form>
      <ToastContainer />
    </Page>
  );
}

export default TransactionsPage;