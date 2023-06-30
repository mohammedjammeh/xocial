const { ethers } = require('ethers');
const { userAddress, userABI } = require('./constants/User');

const provider = new ethers.providers.JsonRpcProvider(process.env.SEPOLIA_RPC_URL);

const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const signer = wallet.provider.getSigner(wallet.address);

const userContract = new ethers.Contract(userAddress, userABI, signer);
const userContractWithWallet = userContract.connect(wallet);

const main = async () => {
	try {
		const response01 = await userContractWithWallet.create(
			'Bobbiski',
			['afrobeats'],
			['stew', 'fish', 'chicken'],
			['tennis', 'cricket']
		);
		await response01.wait(1);

		const response02 = await userContractWithWallet.update(
			1,
			'Jalika',
			['rap', 'drill'],
			['jollof', 'jerk'],
			['football', 'golf', 'tennis']
		);
		await response02.wait(1);
	} catch (error) {
		console.log(error);
	}

	// const all = await userContractWithWallet.getAll();

	// console.log(all);
};

main();
