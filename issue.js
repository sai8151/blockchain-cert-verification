const CertificateContract = artifacts.require("CertificateContract");

async function issueCertificate() {
  try {
    const web3 = new Web3(
      new Web3.providers.HttpProvider("http://127.0.0.1:8545")
    );
    const certificateContract = new web3.eth.Contract(
      contractAbi,
      contractAddress
    );

    const recipientName = document.getElementById("recipientName").value;
    const course = document.getElementById("course").value;
    const issuingOrganization = document.getElementById(
      "issuingOrganization"
    ).value;
    const certificateHash = document.getElementById("certificateHash").value;

    const block = await web3.eth.getBlock("latest");
    console.log("Current Block Details:");
    console.log("Block Number:", block.number);
    console.log("Block Hash:", block.hash);
    console.log("Block Timestamp:", new Date(block.timestamp * 1000));

    await certificateContract.issueCertificate(
      recipientName,
      course,
      issuingOrganization,
      certificateHash
    );

    console.log("Certificate Issued!");
  } catch (error) {
    console.error("Error issuing certificate:", error.message);
  }
}
