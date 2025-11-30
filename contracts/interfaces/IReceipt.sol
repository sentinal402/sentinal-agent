// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IReceipt {
    event ReceiptIssued(bytes32 indexed receiptHash, address indexed payer, uint256 amount);

    function emitReceipt(bytes32 receiptHash, address payer, uint256 amount) external;
}
