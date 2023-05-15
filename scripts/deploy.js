const { ethers, run, network } = require('hardhat');

async function main() {
	const SimpleStorageFactory = await ethers.getContractFactory('SimpleStorage');

	// Deployment
	console.log('Deploying contract..');

	const simpleStorage = await SimpleStorageFactory.deploy();
	await simpleStorage.deployed();

	console.log(`Deployed contract to: ${simpleStorage.address}`);

	// Verification
	const hardhatChainId = 31337;
	if (
		network.config.chainId !== hardhatChainId &&
		process.env.ETHERSCAN_API_KEY
	) {
		console.log('Waiting for block confirmations..');
		await simpleStorage.deployTransaction.wait(6);
		verify(simpleStorage.address, []);
	}

	// Action
	const currentValue = await simpleStorage.retrieve();
	console.log(`Current Value is: ${currentValue}`);

	const tranactionResponse = await simpleStorage.store(7);
	await tranactionResponse.wait(1);
	const updateValue = await simpleStorage.retrieve();
	console.log(`Update Value is: ${updateValue}`);
}

async function verify(contractAddress, args) {
	console.log('Verifying contract..');

	try {
		await run('verify:verify', {
			address: contractAddress,
			constructorArguments: args,
		});
	} catch (e) {
		if (e.message.toLowerCase().includes('already verified')) {
			console.log('Already verified');
		} else {
			console.log(e);
		}
	}
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exitCode = 1;
	});
