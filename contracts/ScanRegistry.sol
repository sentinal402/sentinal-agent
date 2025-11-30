// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract ScanRegistry {
    event ScanRecorded(bytes32 indexed scanHash, address indexed requester, uint256 timestamp);

    mapping(bytes32 => address) public submitterOf;

    function record(bytes32 scanHash) external {
        require(submitterOf[scanHash] == address(0), "Scan already recorded");
        submitterOf[scanHash] = msg.sender;
        emit ScanRecorded(scanHash, msg.sender, block.timestamp);
    }
}
