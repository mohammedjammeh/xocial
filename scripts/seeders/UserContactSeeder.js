const { ethers } = require('ethers');
const { userContactAddress, userContactABI } = require('./constants/UserContact');

const provider = new ethers.providers.JsonRpcProvider(process.env.SEPOLIA_RPC_URL);

const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const signer = wallet.provider.getSigner(wallet.address);

const userContactContract = new ethers.Contract(userContactAddress, userContactABI, signer);
const userContactContractWithWallet = userContactContract.connect(wallet);

const main = async () => {
	try {
		const response01 = await userContactContractWithWallet.create(0, 1);
		await response01.wait(1);

		const response02 = await userContactContractWithWallet.destroy(0, 1);
		await response02.wait(1);
	} catch (error) {
		console.log(error);
	}

	// const all = await userContactContractWithWallet.getContacts(0);

	console.log(all);
};

main();
