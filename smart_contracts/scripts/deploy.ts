import { ethers } from "hardhat";

const main = async () => {
  const DealsContract = await ethers.getContractFactory("Deals");
  const dealsContract = await DealsContract.deploy();

  await dealsContract.deployed();

  console.log("Deals deployed to:", dealsContract.address);
}

// npx hardhat run scripts/deploy.ts --network holesky

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

runMain();

// Contract Address : 0x2513dF8324F1a221F5C754a9278b96dE20251EB9