// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./interfaces/IReceipt.sol";

contract Receipt402 is IReceipt {
    mapping(bytes32 => bool) public receiptSeen;

    function emitReceipt(bytes32 receiptHash, address payer, uint256 amount) external override {
        require(!receiptSeen[receiptHash], "Receipt already recorded");
        receiptSeen[receiptHash] = true;
        emit ReceiptIssued(receiptHash, payer, amount);
    }
}
