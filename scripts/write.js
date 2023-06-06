const { ethers } = require('ethers');

const address = '0xf2e568c7CEB8AD043C3dB5d7e6e3ec31D98867e7';
const abi = require('./abi/linkUp');
const provider = new ethers.providers.JsonRpcProvider(process.env.SEPOLIA_RPC_URL);

const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const signer = wallet.provider.getSigner(wallet.address);
const contract = new ethers.Contract(address, abi, signer);
const contractWithWallet = contract.connect(wallet);

const main = async () => {
	try {
		const response = await contractWithWallet.create(
			'0x0A2169dfcC633289285290a61BB4d10AFA131817',
			'Chill Sess',
			'I just wan chill',
			'Call that chill',
			'2023'
		);
		await response.wait(1);
	} catch (error) {
		console.log(error);
	}

	const all = await contractWithWallet.getAll();
	console.log(all);
};

main();
