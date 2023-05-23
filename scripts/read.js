const { ethers } = require('ethers');

const address = '0x99E7A010d8914b71ea486b6469364A3C0B265e7E';
const abi = require('./abi/event');
const provider = new ethers.providers.JsonRpcProvider(process.env.SEPOLIA_RPC_URL);

const contract = new ethers.Contract(address, abi, provider);

const main = async () => {
	const allEvents = await contract.getEvents();
	console.log(allEvents);
};

main();
