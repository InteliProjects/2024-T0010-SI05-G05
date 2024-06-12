const {ethers} = require("hardhat");
const fs = require("fs");

async function getAbi(){
    const artifactPath = "artifacts/contracts/Quotation.sol/Quotation.json";
    const artifact = JSON.parse(fs.readFileSync(artifactPath, "utf-8"));
    return artifact.abi;
}

async function main(){
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const contract = await ethers.getContractFactory("Quotation");

    const cotations = await contract.deploy(deployer.address);

    console.log("Quotations contract address:", cotations.target);

    const cotationsAbi = await getAbi();

    //save abi to a file
    const configureJSONPathFrontend = "../frontend/src/abi/abi.json";
    const configureJSONPathBackend = "../backend/abi/abi.json";

    const newFrontPath = "../new-frontend/src/abi/abi.json";

    //write to file
    fs.writeFileSync(configureJSONPathFrontend, JSON.stringify({abi: cotationsAbi, address: cotations.target}));
    fs.writeFileSync(configureJSONPathBackend, JSON.stringify({abi: cotationsAbi, address: cotations.target}));
    fs.writeFileSync(newFrontPath, JSON.stringify({abi: cotationsAbi, address: cotations.target}));

    console.log("contract.json file created");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });