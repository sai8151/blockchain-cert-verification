const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const CertificateContract = require("./build/contracts/CertificateContract.json");
const Web3 = require("web3");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const PORT = process.env.PORT || 3000;

// Set up Web3
const networkId = 1337; // Update with your network ID
const networkConfig = CertificateContract.networks[networkId];

if (!networkConfig || !networkConfig.address) {
  console.error(`Contract address not found for network ID ${networkId}`);
  process.exit(1);
}

const contractAddress = networkConfig.address;
const web3 = new Web3(
  new Web3.providers.WebsocketProvider("ws://127.0.0.1:7545")
);
const certificateContract = new web3.eth.Contract(
  CertificateContract.abi,
  contractAddress
);

// Set up WebSocket connection
io.on("connection", (socket) => {
  console.log("Client connected");

  // Listen for certificate verification requests
  socket.on("verifyCertificate", async (certificateId) => {
    try {
      const certificate = await getCertificateDetails(certificateId);
      io.emit("certificateDetails", certificate);
    } catch (error) {
      console.error("Error verifying certificate:", error.message);
    }
  });
});

// Get certificate details from the blockchain
async function getCertificateDetails(certificateId) {
  const certificate = await certificateContract.methods
    .certificates(certificateId)
    .call();
  return certificate;
}

// Serve static files
app.use(express.static("public"));

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
