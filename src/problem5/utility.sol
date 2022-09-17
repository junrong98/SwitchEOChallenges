// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

interface ERC20 {
    function balanceOf(address _owner) external view returns (uint256 balance);
}

contract utility {

    struct TokenBalance {
        address token;
        uint balance;
    }

    function getBalances(address targetAddress, address[] memory _tokenAddress) public view returns (TokenBalance[] memory) {
        TokenBalance[] memory tokenBalance = new TokenBalance[](_tokenAddress.length);

        for (uint i = 0; i < _tokenAddress.length; i++) {
            ERC20 ERC20Contract = ERC20(_tokenAddress[i]);
            uint tknBalance = ERC20Contract.balanceOf(targetAddress);
            tokenBalance[i] = TokenBalance({token: _tokenAddress[i], balance: tknBalance});
        }
        
        return tokenBalance;
    }
}