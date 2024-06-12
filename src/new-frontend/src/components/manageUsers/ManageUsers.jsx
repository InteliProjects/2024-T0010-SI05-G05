import React, { useState } from "react";
import Contract from "../../services/contract";
import { StyledButton, Container, Title, Form, ButtonContainer, Input } from "./style";
import { toast } from "react-toastify";

function ManageUser() {
    const [address, setAddress] = useState("");
    const [name, setName] = useState("");

    function handleAddressChange(event) {
        setAddress(event.target.value);
    }

    function handleNameChange(event) {
        setName(event.target.value);
    }

    async function addWallet() {
        const contract = new Contract();
        try {
            await contract.addUser(address, name);
            toast.success("Wallet adicionada com sucesso");
        } catch(error) {
            toast.error("Ocorreu um erro");
        }
    }

    async function deleteUser() {
        const contract = new Contract();
        try {
            if (await contract.deleteUser(address)) {
                toast.error("Wallet deletada com sucesso");
            } else {
                toast.error("Ocorreu um erro");
            }
        } catch {
            toast.error("Ocorreu um erro");
        }
    }

    return (
        <Container>
            <Title>Gerenciar Usuários</Title>
            <Form>
                <Input
                    type="text"
                    placeholder="Nome da carteira"
                    onChange={handleNameChange}
                />
            </Form>
            <Form>
                <Input
                    type="text"
                    placeholder="Endereço da carteira"
                    onChange={handleAddressChange}
                />
            </Form>
            <ButtonContainer>
                <StyledButton color="#EB3223" onClick={deleteUser}>
                    Remover
                </StyledButton>
                <StyledButton color="#2E4759" onClick={addWallet}>
                    Adicionar
                </StyledButton>
            </ButtonContainer>
        </Container>
    );
}

export default ManageUser;
