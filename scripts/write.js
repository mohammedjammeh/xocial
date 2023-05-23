const { ethers } = require('ethers');

const provider = new ethers.providers.JsonRpcProvider(process.env.SEPOLIA_RPC_URL);
const address = '0x99E7A010d8914b71ea486b6469364A3C0B265e7E';
const abi = [
	{
		inputs: [{ internalType: 'uint256', name: '_id', type: 'uint256' }],
		name: 'attend',
		outputs: [],
		stateMutability: 'payable',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'address', name: '_owner', type: 'address' },
			{ internalType: 'string', name: '_name', type: 'string' },
			{ internalType: 'string', name: '_description', type: 'string' },
			{ internalType: 'string', name: '_location', type: 'string' },
			{ internalType: 'uint256', name: '_moment', type: 'uint256' },
		],
		name: 'create',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		name: 'events',
		outputs: [
			{ internalType: 'address', name: 'owner', type: 'address' },
			{ internalType: 'string', name: 'name', type: 'string' },
			{ internalType: 'string', name: 'description', type: 'string' },
			{ internalType: 'string', name: 'location', type: 'string' },
			{ internalType: 'uint256', name: 'moment', type: 'uint256' },
			{ internalType: 'uint256', name: 'totalPayed', type: 'uint256' },
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'eventsCount',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [{ internalType: 'uint256', name: '_id', type: 'uint256' }],
		name: 'getAttendees',
		outputs: [
			{ internalType: 'address[]', name: '', type: 'address[]' },
			{ internalType: 'uint256[]', name: '', type: 'uint256[]' },
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getEvents',
		outputs: [
			{
				components: [
					{ internalType: 'address', name: 'owner', type: 'address' },
					{ internalType: 'string', name: 'name', type: 'string' },
					{ internalType: 'string', name: 'description', type: 'string' },
					{ internalType: 'string', name: 'location', type: 'string' },
					{ internalType: 'uint256', name: 'moment', type: 'uint256' },
					{ internalType: 'address[]', name: 'attendees', type: 'address[]' },
					{ internalType: 'uint256[]', name: 'attendessPayments', type: 'uint256[]' },
					{ internalType: 'uint256', name: 'totalPayed', type: 'uint256' },
				],
				internalType: 'struct EventContract.Event[]',
				name: '',
				type: 'tuple[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
];

const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const signer = wallet.provider.getSigner(wallet.address);

const contract = new ethers.Contract(address, abi, signer);

const main = async () => {
	const contractWithWallet = contract.connect(wallet);

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

	const allEvents = await contractWithWallet.getEvents();
	console.log(allEvents);
};

main();
