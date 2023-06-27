const { ethers } = require('ethers');
const { linkupAddress, linkupABI } = require('./constants/Linkup');
const { userAddress, userABI } = require('./constants/User');
const { userContactAddress, userContactABI } = require('./constants/UserContact');
const { userLinkupAddress, userLinkupABI } = require('./constants/UserLinkup');

const provider = new ethers.providers.JsonRpcProvider(process.env.SEPOLIA_RPC_URL);

const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const signer = wallet.provider.getSigner(wallet.address);

const linkupContract = new ethers.Contract(linkupAddress, linkupABI, signer);
const linkupContractWithWallet = linkupContract.connect(wallet);

const userContract = new ethers.Contract(userAddress, userABI, signer);
const userContractWithWallet = userContract.connect(wallet);

const userContactContract = new ethers.Contract(userContactAddress, userContactABI, signer);
const userContactContractWithWallet = userContactContract.connect(wallet);

const userLinkupContract = new ethers.Contract(userLinkupAddress, userLinkupABI, signer);
const userLinkupContractWithWallet = userLinkupContract.connect(wallet);

const main = async () => {
	try {
		// const response = await linkupContractWithWallet.create(
		// 	'Dancing',
		// 	'Dancing Sess',
		// 	'Library',
		// 	'1686390600000',
		// 	'1686390600000',
		// 	0,
		// 	1
		// );
		// await response.wait(1);
		//
		// const response = await userContractWithWallet.create(
		// 	'Jaz',
		// 	['afrobeats'],
		// 	['stew', 'fish', 'chicken'],
		// 	['tennis', 'cricket']
		// );
		// await response.wait(1);
		//
		// const response = await userContractWithWallet.update(
		// 	0,
		// 	'Kick Cash Jammeh',
		// 	['rap', 'drill'],
		// 	['jollof', 'jerk'],
		// 	['football', 'golf', 'tennis']
		// );
		// await response.wait(1);
		//
		// const response = await userLinkupContractWithWallet.create(0, 0, 0);
		// await response.wait(1);
	} catch (error) {
		console.log(error);
	}

	// const all = await linkupContractWithWallet.getAllForUser(2);
	// const all = await userContractWithWallet.getAllForLinkup(1);

	// const all = await userContactContractWithWallet.getContacts(0);

	const all = await linkupContractWithWallet.getAll();

	console.log(all);
};

main();
