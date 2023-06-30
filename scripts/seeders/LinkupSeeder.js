const { ethers } = require('ethers');
const { linkupAddress, linkupABI } = require('./constants/Linkup');

const provider = new ethers.providers.JsonRpcProvider(process.env.SEPOLIA_RPC_URL);

const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const signer = wallet.provider.getSigner(wallet.address);

const linkupContract = new ethers.Contract(linkupAddress, linkupABI, signer);
const linkupContractWithWallet = linkupContract.connect(wallet);

const main = async () => {
	try {
		const response01 = await linkupContractWithWallet.createLinkupPlusUserLinkup(
			'Radioo',
			'Listening Sess',
			'Library',
			'1686390600000',
			'1686390600000'
		);
		await response01.wait(1);

		const response02 = await linkupContractWithWallet.createLinkupPlusUserLinkup(
			'Dancee',
			'Dancee Sess',
			'Library',
			'1686390600000',
			'1686390600000'
		);
		await response02.wait(1);

		const response03 = await linkupContractWithWallet.createLinkupPlusUserLinkup(
			'Partty',
			'Parttyy Sess',
			'Library',
			'1686390600000',
			'1686390600000'
		);
		await response03.wait(1);
	} catch (error) {
		console.log(error);
	}

	const all = await linkupContractWithWallet.getAll();

	console.log(all);
};

main();
