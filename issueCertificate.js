// scripts/issueCertificate.js
const contractAddress = "0x15b6193d07e99daba0011454de4470ea5c559fca"; // Replace with your contract address
// Replace with your actual contract ABI
const contractAbi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "recipientName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "course",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "issuingOrganization",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "certificateHash",
        type: "string",
      },
    ],
    name: "CertificateIssued",
    type: "event",
  },
  {
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "certificateCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "certificates",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "recipientName",
        type: "string",
      },
      {
        internalType: "string",
        name: "course",
        type: "string",
      },
      {
        internalType: "string",
        name: "issuingOrganization",
        type: "string",
      },
      {
        internalType: "string",
        name: "certificateHash",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "recipientName",
        type: "string",
      },
      {
        internalType: "string",
        name: "course",
        type: "string",
      },
      {
        internalType: "string",
        name: "issuingOrganization",
        type: "string",
      },
      {
        internalType: "string",
        name: "certificateHash",
        type: "string",
      },
    ],
    name: "issueCertificate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
const certificateContract = new web3.eth.Contract(contractAbi, contractAddress);

(async () => {
  try {
    // Replace with actual certificate data
    const recipientName = "sri ram";
    const course = "Blockchain Basics";
    const issuingOrganization = "Blockchain University";
    const certificateHash = "QmSomeHash";

    // Get the current block details
    const block = await web3.eth.getBlock("latest");

    console.log("Current Block Details:");
    console.log("Block Number:", block.number);
    console.log("Block Hash:", block.hash);
    console.log("Block Timestamp:", new Date(block.timestamp * 1000)); // Convert timestamp to human-readable format

    // Issue the certificate
    await certificateContract.methods
      .issueCertificate(
        recipientName,
        course,
        issuingOrganization,
        certificateHash
      )
      .send({ from: web3.eth.defaultAccount });

    console.log("Certificate Issued!");
  } catch (error) {
    console.error("Error issuing certificate:", error.message);
  }
})();
