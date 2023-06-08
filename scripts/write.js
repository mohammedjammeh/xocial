const { ethers } = require('ethers');
const { linkupAddress, linkupABI } = require('./constants/linkup');

const provider = new ethers.providers.JsonRpcProvider(process.env.SEPOLIA_RPC_URL);

const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const signer = wallet.provider.getSigner(wallet.address);
const contract = new ethers.Contract(linkupAddress, linkupABI, signer);
const contractWithWallet = contract.connect(wallet);

const main = async () => {
	try {
		// const response = await contractWithWallet.create(
		// 	'0x0A2169dfcC633289285290a61BB4d10AFA131817',
		// 	'Booking',
		// 	'Reading Sess',
		// 	'Library',
		// 	'1686390600000',
		// 	'1686390600000',
		// 	['0x0A2169dfcC633289285290a61BB4d10AFA131817', '0x0A2169dfcC633289285290a61BB4d10AFA131817']
		// );
		// await response.wait(1);
	} catch (error) {
		console.log(error);
	}

	const all = await contractWithWallet.getAll();
	console.log(all);
};

main();
