require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers");


/** @type import('hardhat/config').HardhatUserConfig */
const {apiKey, privateKey} = require('./configure.json');
module.exports = {
	solidity: "0.8.19",
	networks: {
		localhost: {},
    sepolia:{
      url: "https://eth-sepolia.g.alchemy.com/v2/"+apiKey,
      accounts: [`0x${privateKey}`]
    }
	},
};