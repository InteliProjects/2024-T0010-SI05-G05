import abi from "../abi/abi.json";
import Web3 from "web3";

class Contract {
    constructor() {
        if (window.ethereum) {
            // MetaMask or similar provider injected
            this.web3 = new Web3(window.ethereum);

        } else {
            // Fallback to local provider
            console.log("local provider")
            this.web3 = new Web3("http://localhost:8545");
        }
        this.contractAddress = abi.address;
        this.contractABI = abi.abi;
        this.contract = new this.web3.eth.Contract(this.contractABI, this.contractAddress);
    }

    async isUser() {
        try {
            const accounts = await this.web3.eth.getAccounts();
            const user = accounts[0];
            console.log("address",user)
            const result = await this.contract._methods.isUser().call({from:user});
            return result;

        } catch (error) {
            console.error("Erro ao verificar se o usuário é válido:", error);
            return false;
        }
    }

    async addUser(adress, userName) {
        try {
            const fromm = await this.web3.eth.getAccounts();
            const user = fromm[0];
            console.log("adress", adress);
            let response = await this.contract.methods.addUser(adress, userName)
                .send({ from: user }); // await the send operation
            return true;
        } catch (error) {
            if (error.message.includes("Transaction has been reverted by the EVM")) {
                throw new Error("Failed to add user: Transaction reverted without reason");
            } else {
                console.log("error", error);
                throw new Error("Failed to add user: Unknown error");
            }
        }
    }
    
    async deleteUser(adress) {
        try {
            const accounts = await this.web3.eth.getAccounts();
            const user = accounts[0];
            console.log("adress", adress);
            let response = await this.contract.methods.deleteUser(adress)
                .send({ from: user }); // await the send operation
            return true;
        } catch (error) {
            if (error.message.includes("Transaction has been reverted by the EVM:")) {
                throw new Error("Failed to delete user: Transaction reverted without reason");
            } else {
                console.log("error", error);
                throw new Error("Failed to delete user: Unknown error");
            }
        }
    }

    async isUserActive(adress) {
        try {
            const accounts = await this.web3.eth.getAccounts();
            const user = accounts[0];
            let response = await this.contract.methods.isUserActive(adress).call({ from: user }); // await the send operation
            return response;
        } catch (error) {
            console.error("Erro ao verificar se o usuário é válido:", error);
            return false;
        }
    }
    

    async insertTransaction(data) {
        try {
            const accounts = await this.web3.eth.getAccounts();
            const user = accounts[0];
            data.id = Number(data.id)
            data.price = Number(data.price)
            data.amount = Number(data.amount)
            let response = await this.contract._methods.addOnGoingTransaction(
                data.address, 
                data.id, 
                data.price, 
                data.local, 
                data.amount
            ).send({from: user})    
            return response

        } catch(error) {
            console.log(error)
            return false
        }
         
    }

    async getAllMyOnGoingTransactions() {
        try {
            const accounts = await this.web3.eth.getAccounts();
            const user = accounts[0];
            let response = await this.contract._methods.getAllMyOnGoingTransactions().call({from: user})    
            return response
        } catch(error) {
            console.log(error)
            return false
        }
    }


    async answerOnGoingTransaction(id, decision) {
        try {
            const accounts = await this.web3.eth.getAccounts();
            const user = accounts[0];
            let response = await this.contract._methods.answerOnGoingTransaction(id, decision).send({from: user})    
            return response
        } catch(error) {
            console.log(error)
            return false
        }
    }

    async getAllFunctions() {
        try {
            const methods = this.contract.methods;
            const functions = Object.keys(methods).filter(method => methods[method].type === 'function');
            return functions;
        } catch (error) {
            console.error("Erro ao obter todas as funções do contrato:", error);
            return [];
        }
    }

    async callFunction(methodName, ...args) {
        try {
            const result = await this.contract.methods[methodName](...args).call();
            return result;
        } catch (error) {
            console.error(`Erro ao chamar a função ${methodName} do contrato:`, error);
            return null;
        }
    }

    async sendTransaction(methodName, ...args) {
        try {
            const accounts = await this.web3.eth.getAccounts();
            const sender = accounts[0];
            const result = await this.contract.methods[methodName](...args).send({ from: sender });
            return result;
        } catch (error) {
            console.error(`Erro ao enviar transação para a função ${methodName} do contrato:`, error);
            return null;
        }
    }
}

export default Contract;
