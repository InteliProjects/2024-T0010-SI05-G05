// Importações necessárias
const { loadFixture } = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { expect } = require("chai");
const { ethers } = require("hardhat");

// Descrição dos testes do contrato Quotation
describe('Quotation', function () {

  // Função de configuração do teste: cenário 01
  async function setUp01() {
    // Obtém a fábrica do contrato 'Quotation'
    const QuotationFactory = await ethers.getContractFactory('Quotation');
    // Obtém as três primeiras contas do Hardhat node (owner, addr1, addr2)
    const [owner, addr1, addr2] = await ethers.getSigners();
    // Implanta uma nova instância do contrato 'Quotation' com o endereço do dono
    const quotation = await QuotationFactory.deploy(owner.address);

    // Retorna a instância do contrato e as contas
    return { quotation, owner, addr1, addr2 };
  }

  // Função de configuração do teste: cenário 03
  async function setUp03() {
    // Carrega o estado inicial do contrato usando a função setUp02
    const { quotation, owner, addr1, addr2 } = await loadFixture(setUp02);

    // Executa uma transação de teste no contrato
    await quotation.connect(addr1).addOnGoingTransaction(addr2.address, 1, 1, "sp", 100)

    // Retorna a instância do contrato e as contas
    return { quotation, owner, addr1, addr2 };
  }

  // Função de configuração do teste: cenário 02
  async function setUp02() {
    // Carrega o estado inicial do contrato usando a função setUp01
    const { quotation, owner, addr1, addr2 } = await loadFixture(setUp01);

    // Adiciona dois usuários ao contrato para teste
    await quotation.addUser(addr1.address, "paula");
    await quotation.addUser(addr2.address, "carlos");

    // Retorna a instância do contrato e as contas
    return { quotation, owner, addr1, addr2 };
  }
  
  // Teste 1: uma transação ocorreu e o receptor vai dar uma resposta positiva, então a transação deve ser registrada
  it('1 - Uma transação ocorreu e o destinatário vai dar uma resposta positiva. A resposta será positiva, então a transação deve ser registrada.', async function () {
    // Carrega o estado inicial do contrato usando a função setUp03
    const { quotation, addr2 } = await loadFixture(setUp03);

    // Verifica se a resposta positiva do destinatário não causa uma reversão na transação
    await expect(quotation.connect(addr2).answerOnGoingTransaction(1, true)).not.to.be.reverted; 
    // Verifica se a transação foi registrada corretamente
    const response = await quotation.getTransactions()
    expect(response.length).to.equal(1);
  });

  // Teste 2: uma transação ocorreu e o receptor vai dar uma resposta negativa, então a transação não deve ser registrada
  it('2 - Uma transação ocorreu e o destinatário vai dar uma resposta negativa. A resposta será negativa, então a transação não deve ser registrada.', async function () {
    // Carrega o estado inicial do contrato usando a função setUp03
    const { quotation, addr2 } = await loadFixture(setUp03);

    // Verifica se a resposta negativa do destinatário não causa uma reversão na transação
    await expect(quotation.connect(addr2).answerOnGoingTransaction(1, false)).not.to.be.reverted; 
    // Verifica se não há transações registradas
    const response = await quotation.getTransactions()
    expect(response.length).to.equal(0);
  });

  // Teste 3: uma transação ocorreu e o destinatário respondeu. Um evento deve ocorrer
  it('3 - Uma transação ocorreu e o destinatário respondeu. Deve ocorrer um evento.', async function () {
    // Carrega o estado inicial do contrato usando a função setUp03
    const { quotation, addr2, addr1 } = await loadFixture(setUp03);

    // O destinatário responde positivamente à transação
    const tx = await quotation.connect(addr2).answerOnGoingTransaction(1, true);
    // Obtém o recibo da transação
    const receipt = await ethers.provider.getTransactionReceipt(tx.hash);
    // Define a interface do evento esperado
    const interfaceEther = new ethers.Interface(["event AnsweredAnGoingTransaction(address indexed wallet, bool decision)"]);
    // Extrai os dados e tópicos do log de eventos
    const data = receipt.logs[0].data;
    const topics = receipt.logs[0].topics;
    // Decodifica o log de eventos
    const event = interfaceEther.decodeEventLog("AnsweredAnGoingTransaction", data, topics);
    // Verifica se o evento possui os parâmetros esperados
    expect(event[0]).to.equal(addr1.address);
    expect(event[1]).to.equal(true);
  });

  // Teste 4: o proprietário do contrato deve adicionar uma carteira
  it('4 - O proprietário do contrato deve adicionar uma carteira', async function () {
    // Carrega o estado inicial do contrato usando a função setUp01
    const { quotation, owner, addr1 } = await loadFixture(setUp01);

    // Adiciona um novo usuário ao contrato usando o endereço addr1
    await expect(quotation.connect(owner).addUser(addr1.address, "paula")).not.to.be.reverted;
  });

  // Teste 5: outras carteiras não devem adicionar uma carteira
  it('5 - Outras carteiras não devem adicionar uma carteira', async function () {
    // Carrega o estado inicial do contrato usando a função setUp01
    const { quotation, addr1 } = await loadFixture(setUp01);

    // Verifica se outras carteiras não têm permissão para adicionar um usuário
    await expect(quotation.connect(addr1).addUser(addr1.address, "paula")).to.be.reverted;
  });

  // Teste 6: um usuário deve enviar uma proposta com todos os dados
  it('6 - Um usuário deve enviar uma proposta com todos os dados', async function () {
    // Carrega o estado inicial do contrato usando a função setUp02
    const { quotation, addr1, addr2 } = await loadFixture(setUp02);

    // Verifica se um usuário pode enviar uma proposta com todos os dados necessários
    await expect(quotation.connect(addr1).addOnGoingTransaction(addr2.address, 1, 1, "sp", 100)).not.to.be.reverted;
  });

  // Teste 7: um usuário não deve enviar uma proposta sem todos os dados
  it('7 - Um usuário não deve enviar uma proposta sem todos os dados', async function () {
    // Carrega o estado inicial do contrato usando a função setUp02
    const { quotation, addr1, addr2 } = await loadFixture(setUp02);

    try {
      // Tenta enviar uma proposta sem todos os dados necessários
      await quotation.connect(addr1).addOnGoingTransaction(addr2.address, 1, 1, "sp");
      // Se a execução não falhar, o teste falha, já que não deveria ser possível enviar uma proposta incompleta
      expect.fail("Não deve aceitar uma proposta sem todos os dados");
    } catch {}
  });


  // Teste 8: o proprietário do contrato pode remover usuários permitidos
  it('8 - O proprietário do contrato pode remover usuários permitidos', async function () {
    // Carrega o estado inicial do contrato usando a função setUp01
    const { quotation, owner, addr1 } = await loadFixture(setUp01);

    // Adiciona o endereço addr1 como um usuário permitido
    await quotation.connect(owner).addUser(addr1.address, "paula");

    // Verifica se addr1 é um usuário permitido antes da remoção
    let isAddr1AllowedBefore = await quotation.isUserActive(addr1.address);
    expect(isAddr1AllowedBefore).to.equal(true);

    // Tenta remover o usuário permitido (addr1) usando o proprietário
    await quotation.connect(owner).deleteUser(addr1.address);

    // Verifica se addr1 não é mais um usuário permitido após a remoção
    let isAddr1AllowedAfter = await quotation.isUserActive(addr1.address);
    expect(isAddr1AllowedAfter).to.equal(false);
  });

  // Teste 9: outros usuários não podem remover usuários permitidos
  it('9 - Outros usuários não podem remover usuários permitidos', async function () {
    // Carrega o estado inicial do contrato usando a função setUp01
    const { quotation, owner, addr1, addr2 } = await loadFixture(setUp01);

    // Adiciona o endereço addr1 como um usuário permitido
    await quotation.connect(owner).addUser(addr1.address, "paula");

    // Verifica se addr1 é um usuário permitido antes da remoção
    let isAddr1AllowedBefore = await quotation.isUserActive(addr1.address);
    expect(isAddr1AllowedBefore).to.equal(true);

    try {
      // Tenta remover o usuário permitido (addr1) usando addr2 (não "owner")
      await quotation.connect(addr2).deleteUser(addr1.address);
      // Se a execução não falhar, o teste falha, já que não deveria ser possível remover sem ser o proprietário
      expect.fail("Outros usuários não devem conseguir remover usuários permitidos");
    } catch (error) {
      // Verifica se o erro esperado ocorreu
      expect(error.message).to.contain("Ownable: caller is not the owner");
    }

    // Verifica se addr1 ainda é um usuário permitido após a tentativa de remoção incorreta
    let isAddr1AllowedAfter = await quotation.isUserActive(addr1.address);
    expect(isAddr1AllowedAfter).to.equal(true);
  });
  
});
