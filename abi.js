const networkId = "1337"; // Update with your network ID
const contractAddress = "0x15B6193D07e99DAba0011454DE4470eA5C559fCa"; // Update with your contract address

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
