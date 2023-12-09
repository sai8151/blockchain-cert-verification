// contracts/CertificateContract.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CertificateContract {
    address public admin;
    uint256 public certificateCount;

    struct Certificate {
        uint256 id;
        string recipientName;
        string course;
        string issuingOrganization;
        string certificateHash;
    }

    mapping(uint256 => Certificate) public certificates;

    event CertificateIssued(uint256 id, string recipientName, string course, string issuingOrganization, string certificateHash);

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }

    constructor() {
        admin = msg.sender;
        certificateCount = 0;
    }

    function issueCertificate(string memory recipientName, string memory course, string memory issuingOrganization, string memory certificateHash) public onlyAdmin {
        certificateCount++;
        certificates[certificateCount] = Certificate(certificateCount, recipientName, course, issuingOrganization, certificateHash);
        emit CertificateIssued(certificateCount, recipientName, course, issuingOrganization, certificateHash);
    }
}
