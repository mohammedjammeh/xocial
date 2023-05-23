const { ethers } = require('ethers');

const address = '0x99E7A010d8914b71ea486b6469364A3C0B265e7E';
const abi = require('./abi/event');
const provider = new ethers.providers.JsonRpcProvider(process.env.SEPOLIA_RPC_URL);

const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const signer = wallet.provider.getSigner(wallet.address);
const contract = new ethers.Contract(address, abi, signer);
const contractWithWallet = contract.connect(wallet);

const main = async () => {
	try {
		const response = await contractWithWallet.create(
			'0x0A2169dfcC633289285290a61BB4d10AFA131817',
			'Jump Around',
			'Jump Jump Jump',
			'Brikama',
			1300
		);

		await response.wait(1);
	} catch (error) {
		console.log(error);
	}

	const all = await contractWithWallet.getEvents();
	console.log(all);
};

main();
