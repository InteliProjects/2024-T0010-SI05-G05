import json
from manage_web3 import ManageWeb3

class Configurator:
    def __init__(self):
        abi_file = "./abi/abi.json"
        secrets = {}
        contract_address = ""

        with open('configure.json') as f:
            secrets = json.load(f)

        with open(abi_file) as f:
            contract_address = json.load(f)['address']

        link = 'https://eth-sepolia.g.alchemy.com/v2/'+secrets['apiKey']
        private_key = secrets['privateKey']

        self.manager = ManageWeb3({
            'link':link, 
            'abi_file':abi_file, 
            'contract_address':contract_address, 
            'private_key':private_key
        })