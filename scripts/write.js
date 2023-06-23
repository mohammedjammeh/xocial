const { ethers } = require('ethers');
const { linkupAddress, linkupABI } = require('./constants/Linkup');
const { userAddress, userABI } = require('./constants/user');
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
		// 	'0x0A2169dfcC633289285290a61BB4d10AFA131817',
		// 	'Dancing',
		// 	'Dance Sess',
		// 	'Library',
		// 	'1686390600000',
		// 	'1686390600000',
		// 	['0x0A2169dfcC633289285290a61BB4d10AFA131817', '0x0A2169dfcC633289285290a61BB4d10AFA131817']
		// );
		// await response.wait(1);
		//
		// const response = await userContractWithWallet.create(
		// 	'2pac Bob',
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
		// const response = await userContactContractWithWallet.create(0, 3);
		// const response = await userContactContractWithWallet.destroy(1);
		// await response.wait(1);
		//
		// const response = await userLinkupContractWithWallet.create(2, 2, 0);
		// await response.wait(1);
	} catch (error) {
		console.log(error);
	}

	const all = await userLinkupContractWithWallet.getLinkups(0);
	console.log(all);
};

main();
