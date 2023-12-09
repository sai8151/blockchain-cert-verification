// scripts/issueCertificate.js
const CertificateContract = artifacts.require("CertificateContract");

module.exports = async function (callback) {
  try {
    const certificateContract = await CertificateContract.deployed();

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

    await certificateContract.issueCertificate(
      recipientName,
      course,
      issuingOrganization,
      certificateHash
    );

    console.log("Certificate Issued!");
    callback();
  } catch (error) {
    console.error("Error issuing certificate:", error.message);
    callback(error);
  }
};
