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

   ```
   truffle compile
   ganache-cli
   ```

```
$ ganache-cli
ganache v7.9.1 (@ganache/cli: 0.10.1, @ganache/core: 0.10.1)
Starting RPC server

Available Accounts
==================
(0) 0x4ef8Cb0CCd1D732236BA78b102BE4C4F273314B7 (1000 ETH)
(1) 0x3780aF491BF1390781aD99786BEEA4746e5DB518 (1000 ETH)
(2) 0x3d16086CD90bA9C7cdf8159b30B94F0dd1Dc392e (1000 ETH)
(3) 0x078930b385440829Ab81eC003aA6D60991Dcc1AD (1000 ETH)
(4) 0x3B9b580D33354c43421F3a129a49412f853Dd899 (1000 ETH)
(5) 0x35e45B49b4021472f474069c42f20ceab02916a7 (1000 ETH)
(6) 0x9ce8b7d5EBCd4D278a192651876795f188cc0B48 (1000 ETH)
(7) 0x6A52dB719522f0D81C9A294FD5078B8fb2796157 (1000 ETH)
(8) 0x4950ba8a4315C10Afe2E022323F57734B15625c3 (1000 ETH)
(9) 0x0030fBE3EB41fdE402192B070C664Afa034a74a2 (1000 ETH)

Private Keys
==================
(0) 0xbca775efd3e05df3bd75c19cf19aa9c38ba2ccd578aa29a823010d12b5c84333
(1) 0xdd890adccac8941da77ccce4c5abce5c96a2532ed5b08afd36a315ef28c5362d
(2) 0x733b69be2c37d53c91b0c7b217531962c4bf06fef2461104259afab3f147ec10
(3) 0x602cae0ff86bad8e6de2648e7b80fe920eadd8dedd23c8b7ca4a999f0db8e956
(4) 0x23a48ac5f0a924d2dfd2d42fb766f341b0656b837147732dc9c1168f36ac5ad7
(5) 0x706043478e6e3756cac59cd8f3d66e465d35c9054dffab0ce7ea235e54921ff7
(6) 0x1e796711825b59626f5594fabd74dfa8de57788bbf30ee506dd05baccf90ee2d
(7) 0xf658e921da933f635f97d51873808ed39c3de934b37351432f47cca51bfed172
(8) 0x6e833a22e9b86cfefdab4031ba6b47f9b457417930045a4c1ad5f04a5079160d
(9) 0x5c14687d7c2f7bc536089172d12fa21021b0a21eff408bb8b107ac94e258f70f

HD Wallet
==================
Mnemonic:      myth proof minor symbol witness around powder narrow corn squirrel excess nephew
Base HD Path:  m/44'/60'/0'/0/{account_index}

Default Gas Price
==================
2000000000

BlockGas Limit
==================
30000000

Call Gas Limit
==================
50000000

Chain
==================
Hardfork: shanghai
Id:       1337

RPC Listening on 127.0.0.1:8545
```

Ensure Ganache is running and has a local blockchain available.

4. Compile and deploy the smart contract:

`truffle migrate --reset --network development`

```
$ truffle migrate --reset --network development

Compiling your contracts...
===========================
✓ Fetching solc version list from solc-bin. Attempt #1
> Everything is up to date, there is nothing to compile.


Starting migrations...
======================
> Network name:    'development'
> Network id:      1702138905481
> Block gas limit: 30000000 (0x1c9c380)


2_deploy_contracts.js
=====================

   Deploying 'CertificateContract'
   -------------------------------
   > transaction hash:    0xc3eedece94fd6b4b812721defa4f579e94a00c1f756cd1065e09906330f09670
   > Blocks: 0            Seconds: 0
   > contract address:    0x14906C19b32e278882140541Ab2c3399B5a1edC4
   > block number:        1
   > block timestamp:     1702138912
   > account:             0x14201e0bAf750fd75570bc225e821fD84903E014
   > balance:             999.997359416875
   > gas used:            782395 (0xbf03b)
   > gas price:           3.375 gwei
   > value sent:          0 ETH
   > total cost:          0.002640583125 ETH

   > Saving artifacts
   -------------------------------------
   > Total cost:      0.002640583125 ETH

Summary
=======
> Total deployments:   1
> Final cost:          0.002640583125 ETH
```

5. Open the frontend:
   Open `index.html` and `gen.html` in your preferred web browser. This will allow you to interact with the smart contract and issue certificates.

Change the following to desired one when you run `truffle migrate --reset --network development`

Port number:8545

contractAddress = "0x14906C19b32e278882140541Ab2c3399B5a1edC4"

web3.eth.defaultAccount = "0x14201e0bAf750fd75570bc225e821fD84903E014"

```

            const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
            // Update with your contract address
            const contractAddress = "0x14906C19b32e278882140541Ab2c3399B5a1edC4";

            // Set the default account to one of the Ganache accounts
            web3.eth.defaultAccount = "0x14201e0bAf750fd75570bc225e821fD84903E014";
            // Change to another Ganache account if needed

```

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
