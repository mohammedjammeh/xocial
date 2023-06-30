const { ethers } = require('ethers');
const { userLinkupAddress, userLinkupABI } = require('./constants/UserLinkup');

const provider = new ethers.providers.JsonRpcProvider(process.env.SEPOLIA_RPC_URL);

const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const signer = wallet.provider.getSigner(wallet.address);

const userLinkupContract = new ethers.Contract(userLinkupAddress, userLinkupABI, signer);
const userLinkupContractWithWallet = userLinkupContract.connect(wallet);

const main = async () => {
	try {
		// createLinkupPlusUserLinkup
		const response01 = await userLinkupContractWithWallet.createLinkupPlusUserLinkup(
			'Radioo',
			'Listening Sess',
			'Library',
			'1686390600000',
			'1686390600000',
			0,
			[1, 2]
		);
		await response01.wait(1);

		const response02 = await userLinkupContractWithWallet.createLinkupPlusUserLinkup(
			'Dancee',
			'Dancee Sess',
			'Library',
			'1686390600000',
			'1686390600000',
			0,
			[3]
		);
		await response02.wait(1);

		const response03 = await userLinkupContractWithWallet.createLinkupPlusUserLinkup(
			'Partty',
			'Parttyy Sess',
			'Library',
			'1686390600000',
			'1686390600000',
			3,
			[0]
		);
		await response03.wait(1);

		// create
		const response04 = await userLinkupContractWithWallet.create(4, 1, 5);
	} catch (error) {
		console.log(error);
	}

	// const all = await userLinkupContractWithWallet.get(0);

	// const all = await userLinkupContractWithWallet.getUserLinkups(0);

	// const all = await userLinkupContractWithWallet.getLinkupUsers(0);

	// const all = await userLinkupContractWithWallet.getAll();

	// console.log(all);
};

main();
