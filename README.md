# 2024-T0010-SI05-G05

# Inteli - Instituto de Tecnologia e Liderança 

<p align="center">
<a href= "https://www.inteli.edu.br/"><img src="assets/inteli.png" alt="Inteli - Instituto de Tecnologia e Liderança" border="0" width=40% height=40%></a>
</p>

<br>

# Plataforma Mitra - Aplicações em Blockchain

## Blockbriefs - Grupo 5

## 👨‍🎓 Integrantes: 
- <a href="https://www.linkedin.com/in/erik-batista-da-silva-455612215/">Erik Batista da Silva</a>
- <a href="https://www.linkedin.com/in/thiago-goulart-de-oliveira/">Thiago Goulart de Oliveira</a>
- <a href="https://www.linkedin.com/in/freddy-mester-harari-375860279/">Freddy Mester Harari</a>
- <a href="https://www.linkedin.com/in/michel-menahem-khafif-512791201/">Michel Menahem Khafif</a>
- <a href="https://www.linkedin.com/in/matheusmeendes/">Matheus Ferreira Mendes</a>
- <a href="https://www.linkedin.com/in/otto-bernardo-coutinho-lima/">Otto Bernardo Coutinho Lima</a>
- <a href="https://www.linkedin.com/in/yan-m-coutinho/">Yan Mendonça Coutinho</a>


## 👩‍🏫 Professores:
### Orientador(a) 
- <a href="https://www.linkedin.com/in/renato-penha/">Renato Penha</a>

### Instrutores
- <a href="https://www.linkedin.com/in/anacristinadossantos/">Ana Cristina dos Santos</a>
- <a href="https://www.linkedin.com/in/fernando-pizzo-208b526a/">Fernando Pizzo Ribeiro</a>
- <a href="https://www.linkedin.com/in/rafael-jacomossi-6135b0a1/">Rafael Ricardo Jacomossi</a>
- <a href="https://www.linkedin.com/in/sergio-venancio-a509b342/">Sergio José Venancio Júnior</a>
- <a href="https://www.linkedin.com/in/vthayashi/">Victor Takashi Hayashi
</a>

## 📜 Descrição

O projeto Mitra é uma solução inovadora que utiliza a tecnologia blockchain para revolucionar o processo de cotação de fornecedores. Ao enfrentar desafios como a falta de transparência nos preços históricos praticados por fornecedores e a permanência de fornecedores suspeitos em plataformas self-service, a plataforma Mitra busca oferecer transparência, segurança e eficiência para os usuários.

Através do uso da blockchain, a plataforma proporciona transparência e rastreabilidade das transações, eliminando intermediários e criando uma rede confiável de informações. Com a garantia de preços justos, baseados em dados reais de mercado registrados na blockchain, os usuários podem confiar na integridade das transações e tomar decisões de compra mais informadas.

Por fim, a aplicação Mitra visa simplificar e otimizar o processo de cotação de fornecedores, proporcionando uma plataforma onde os usuários podem encontrar os produtos e serviços desejados, com total transparência e confiança nas informações disponíveis. Com uma abordagem centrada no usuário e focada na inovação tecnológica, o Mitra está preparado para transformar a maneira como as transações comerciais são conduzidas, oferecendo uma solução moderna e eficaz para as necessidades do mercado atual.

## Video de apresentação
<a href="https://youtu.be/nzxdrbyhbaU">Video de demonstração da plataforma</a>

## 📁 Estrutura de pastas

|--> assets<br>
  &emsp;| --> frontend-mitra <br>
  &emsp;| --> imagens <br>
  &emsp;|--> readme.md<br>
|--> docs<br>
  &emsp;|--> readme.md<br>
  &emsp;| --> documentacao.md <br>

|--> src<br>
  &emsp;|--> backend<br>
  &emsp;|--> contractFolder<br>
  &emsp;|--> new-frontend<br>
        &emsp;&emsp;|--> public<br>
        &emsp;&emsp;|--> src<br>

  &emsp;|--> readme.md<br>
| readme.md<br>

Dentre os arquivos e pastas presentes na raiz do projeto, definem-se:

- <b>assets</b>: aqui estão os arquivos relacionados a parte gráfica do projeto, ou seja, as imagens e links de vídeos que os representam (o logo do grupo pode ser adicionado nesta pasta).

- <b>docs</b>: aqui estão todos os documentos do projeto. Há também um arquivo README para o grupo registrar a localização de cada artefato.

- <b>src</b>: Todo o código fonte criado para o desenvolvimento do projeto, incluindo backend e frontend se aplicáveis.

- <b>src (dentro de frontend)</b>: Todo o código fonte criado para frontend.

- <b>README.md</b>: arquivo que serve como guia e explicação geral sobre o projeto (o mesmo que você está lendo agora).

## 🔧 Instalação

&emsp; Antes de iniciar o processo de instalação deste projeto, adquira uma carteira de criptomoedas. Essa pode ser adiquirida via <a href="https://metamask.io">Metamask</a> (carteira de criptomoeda de software usada para interagir com o blockchain Ethereum). Além disso, tambem será necessário uma chave de api da <a href="https://www.alchemy.com">Alchemy</a> (plataforma de desenvolvimento com suporte multi-cadeia e alcance global, projetado para facilitar o desenvolvimento de aplicativos descentralizados).

&emsp;Considerando as necessidades do projeto, este será dividido em backend(API), frontend(parte visual da aplicação) e smart contract(contrato para interação com web3), os quais serão inicializados da seguinte maneira:

### Clonando o projeto:

&emsp; O primeiro passo para iniciar a aplicação é "clonar" este repositório, isto é, salva-so em seu computador. Isso poderá ser feito através da página do projeto no git hub, selecionando a opção "code" e então selecionando a opção que mais se adequa às suas necessidades.
&emsp;Outra opção para clonar o repositório via prompt de comando. Primeiramente, abra o terminal do seu computador, navegue até a pasta na qual deseja salvar o projeto e execute o seguinte comando

```Bash
git clone https://github.com/Inteli-College/2024-T0010-SI05-G05
```
&emsp;Em seguida, entre na pasta do projeto com o seguinte comando
```Bash
cd ./2024-T0010-SI05-G05
```

&emsp;Agora será necessário iniciar cada seção do projeto seguindo os seguintes passos:

### Smart Contract
&emsp;Considerando que os passos acima foram seguidos, será necessario acessar a pasta relativa ao deploy do _Smart Contract_ executando o seguinte comando no _prompt_ de comando:

 ```Bash
cd ./src/contractFolder
```

&emsp;Em seguida, precisamos instalar as dependencias para executar e realizar o _deploy_ do _Smart Contract_. Para isso, será executado o seguinte comando:

```Bash
npm i
```
&emsp;Após isso, será necessário acessar o arquivo _configure.json_ que se encontra dentro da pasta "_contractFolder_" e alterar os valores de _"apiKey"_ e _"privateKey"_ para a sua chave de api do Alchemy e a chave privada da sua carteira _ethereum_ respectivamente.

Com isso, o próximo passo é voltar para o _prompt_ de comando, ainda na pasta "contract folder" e executar o comando:

```Bash
npx hardhat run scripts/deploy.js --network sepolia
```
&emsp;O comando acima executa o script de _deploy_ do contrato que se encontra na pasta _"scripts"_, a qual está salva em "_contractFolder_". Esse, tem como objetivo realizar o _deploy_ do contrato na rede testnet da sepolia com a Alchemy.

## 🗃 Histórico de lançamentos

* 0.0.1 - 18/02/2024
    * Primeira entrega : Análise de negócio  e entendimento do projeto.
* 0.0.2 - 03/03/2024
    * Segunda entrega : Construção da primeira versão dos Smarts Contracts.
* 0.0.3 - 17/03/2024
    * Terceira entrega : Integração com o frontend.
* 0.0.4 - 28/03/2024
    * Quarta entrega : Deploy do Smart Contract e Testes Automatizados.
* 0.0.5 - 11/04/2024
    * Quinta (última) entrega : Refinamento do projeto e segunda integração com o frontend.


## 📋 Licença/License

<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"><p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><a property="dct:title" rel="cc:attributionURL" href="https://github.com/Spidus/Teste_Final_1">MODELO GIT INTELI</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://www.yggbrasil.com.br/vr">Inteli</a>, - <a href="https://www.linkedin.com/in/erik-batista-da-silva-455612215/">Erik Batista da Silva</a>, <a href="https://www.linkedin.com/in/thiago-goulart-de-oliveira/">Thiago Goulart de Oliveira</a>, <a href="https://www.linkedin.com/in/freddy-mester-harari-375860279/">Freddy Mester Harari</a>, <a href="https://www.linkedin.com/in/michel-menahem-khafif-512791201/">Michel Menahem Khafif</a>, <a href="https://www.linkedin.com/in/matheusmeendes/">Matheus Ferreira Mendes</a>, <a href="https://www.linkedin.com/in/otto-bernardo-coutinho-lima/">Otto Bernardo Coutinho Lima</a>, <a href="https://www.linkedin.com/in/yan-m-coutinho/">Yan Mendonça Coutinho</a> is licensed under <a href="http://creativecommons.org/licenses/by/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">Attribution 4.0 International</a>.</p>


