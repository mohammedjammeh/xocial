const { ethers } = require('ethers');

const address = '0xf2e568c7CEB8AD043C3dB5d7e6e3ec31D98867e7';
const abi = require('./abi/linkUp');
const provider = new ethers.providers.JsonRpcProvider(process.env.SEPOLIA_RPC_URL);

const contract = new ethers.Contract(address, abi, provider);

const main = async () => {
	const all = await contract.getAll();
	console.log(all);
};

main();
