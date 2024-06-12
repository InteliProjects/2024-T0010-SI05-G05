// SPDX-License-Identifier: MIT

pragma solidity >=0.4.22 <0.9.0;

import "remix_tests.sol";
import "../contracts/Quotation.sol";
import "remix_accounts.sol";

contract Quotation_US4_test is Quotation {
    address _account1 = 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4;
    string _name1 = "Account 1";
    address account;

    constructor() Quotation(msg.sender) {}
     
     function beforeAll() public {
        users[_account1] = User({
            name: _name1,
            timestamp: block.timestamp,
            active: true
        });
    }
    
    function testInsertDataSuccess() public {
        (bool success, ) = address(_account1).call(
            abi.encodeWithSignature(
                "addOnGoingTransaction(address,uint256,uint256,string,uint256)",
                account,
                123,
                100,
                "Sao Paulo",
                5
            )
        );

        Assert.ok(success, "A carteira permitida deveria conseguir inserir os dados");
    }

    function testInsertDataFailure() public {
        (bool success, ) = address(this).call(
            abi.encodeWithSignature(
                "addOnGoingTransaction(address,uint256,uint256,string,uint256)",
                account, 
                456,
                200,
                "Rio de Janeiro",
                10
            )
        );

        Assert.ok(!success, "A carteira nao permitida nao deveria conseguir inserir os dados");
    }
}
