<img src="https://img.shields.io/badge/JAVASCRIPT-black?style=for-the-badge&logo=JavaScript&logoColor=F7DF1E"/>
<img src="https://img.shields.io/badge/HTML-black?style=for-the-badge&logo=HTML5&logoColor=E34F26"/>

<br>
# Certificate Validation using Blockchain

This project demonstrates a simple implementation of certificate validation using a blockchain. It utilizes a smart contract to issue and verify certificates on the Ethereum blockchain.

## Prerequisites

Ensure that you have the following software installed on your machine:

- [Node.js](https://nodejs.org/)
- [Truffle](https://www.trufflesuite.com/truffle)
- [Ganache](https://www.trufflesuite.com/ganache)

## Project Setup

1. Clone the repository

2. Install project dependencies:

```
cd certificate-validation
npm install
```

3. Start Ganache:
   Ensure Ganache is running and has a local blockchain available.

4. Compile and deploy the smart contract:

`truffle migrate --reset --network development`

5. Open the frontend:
   Open `index.html` in your preferred web browser. This will allow you to interact with the smart contract and issue certificates.

## Usage

1. Open `index.html` in your web browser.
2. Fill out the certificate information in the provided form:

- Recipient Name
- Course
- Issuing Organization
- Certificate Hash

3. Click the "Generate Certificate" button to issue the certificate on the blockchain.
4. View the transaction details in the browser console.

## Customization

Feel free to customize the smart contract (`contracts/CertificateContract.sol`) and the frontend (`index.html`) based on your specific requirements.
