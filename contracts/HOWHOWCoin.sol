pragma solidity ^0.4.18;

// import "zeppelin-solidity/contracts/token/StandardToken.sol";

// /**
//  * @title SimpleToken
//  * @dev Very simple ERC20 Token example, where all tokens are pre-assigned to the creator.
//  * Note they can later distribute these tokens as they wish using `transfer` and other
//  * `StandardToken` functions.
//  */
// contract HowCoin is StandardToken {

//   string public constant name = "HowCoin";
//   string public constant symbol = "HC";
//   uint8 public constant decimals = 0;

//   uint256 public constant INITIAL_SUPPLY = 10000;

//   /**
//    * @dev Constructor that gives msg.sender all of existing tokens.
//    */
//   function HowCoin() public {
//     totalSupply = INITIAL_SUPPLY;
//     balances[msg.sender] = INITIAL_SUPPLY;
//   }

// }

import "zeppelin-solidity/contracts/token/MintableToken.sol";

contract HOWHOWCoin is MintableToken {
    string public constant name = "HOWHOWCoin";
    string public constant symbol = "HHC";
    uint8 public constant decimals = 15;
}
