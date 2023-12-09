// scripts/verifyCertificate.js
const CertificateContract = artifacts.require("CertificateContract");

module.exports = async function (callback) {
  try {
    const certificateContract = await CertificateContract.deployed();

    // Replace with actual certificate ID to verify
    const certificateId = 2;

    const certificate = await certificateContract.certificates(certificateId);

    if (certificate.id === 0) {
      console.log("Certificate not found");
    } else {
      console.log("Certificate Details:");
      console.log("Recipient Name:", certificate.recipientName);
      console.log("Course:", certificate.course);
      console.log("Issuing Organization:", certificate.issuingOrganization);
      console.log("Certificate Hash:", certificate.certificateHash);
    }

    callback();
  } catch (error) {
    console.error("Error verifying certificate:", error.message);
    callback(error);
  }
};
