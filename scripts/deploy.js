const { ethers, run, network } = require("hardhat");

async function main() {
  const SimpleStorageFactory = await ethers.getContractFactory('SimpleStorage');

  console.log('Deploying contract..');

  const simpleStorage = await SimpleStorageFactory.deploy()
  await simpleStorage.deployed();

  console.log(`Deployed contract to: ${simpleStorage.address}`);

  if(network.config.chainId === 4 && process.env.ETHERSCAN_API_KEY) {
    await simpleStorage.deployTransaction.wait(6)
    verify(simpleStorage.address, []);
  }
}

async function verify(contactAddress, args) {
  console.log('Verifying contract..');

  try {
    await run('verify:verify', {
      address: contactAddress,
      constructorArguments: args
    });
  } catch(e) {
    if(e.message.toLowerCase().includes('already verified')) {
      console.log('Already verified');
    } else {
      console.log(e)
    }
  }
}
     
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
