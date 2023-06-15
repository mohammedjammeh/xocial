const { ethers } = require('ethers');
const { linkupAddress, linkupABI } = require('./constants/linkup');
const { userContractAddress, userContractABI } = require('./constants/user');

const provider = new ethers.providers.JsonRpcProvider(process.env.SEPOLIA_RPC_URL);

const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const signer = wallet.provider.getSigner(wallet.address);

const linkupContract = new ethers.Contract(linkupAddress, linkupABI, signer);
const linkupContractWithWallet = linkupContract.connect(wallet);

const userContract = new ethers.Contract(userContractAddress, userContractABI, signer);
const userContractWithWallet = userContract.connect(wallet);

const main = async () => {
	try {
		// const response = await linkupContractWithWallet.create(
		// 	'0x0A2169dfcC633289285290a61BB4d10AFA131817',
		// 	'Booking',
		// 	'Reading Sess',
		// 	'Library',
		// 	'1686390600000',
		// 	'1686390600000',
		// 	['0x0A2169dfcC633289285290a61BB4d10AFA131817', '0x0A2169dfcC633289285290a61BB4d10AFA131817']
		// );
		// await response.wait(1);
		//
		// const response = await userContractWithWallet.create(
		// 	'0x0A2169dfcC633289285290a61BB4d10AFA131817',
		// 	'Mohammed Jammeh',
		// 	['rap', 'jazz'],
		// 	['stew', 'curry'],
		// 	['football', 'golf']
		// );
		const response = await userContractWithWallet.update(
			0,
			'Mohammed Jamaaly Jammeh',
			['rap', 'jazz'],
			['jollof', 'jerk'],
			['football', 'golf', 'tennis']
		);
		await response.wait(1);
	} catch (error) {
		console.log(error);
	}

	const all = await userContractWithWallet.getAll();
	console.log(all);
};

main();
