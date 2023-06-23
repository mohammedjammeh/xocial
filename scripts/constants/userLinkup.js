const userLinkupAddress = '0x4cDFeaEc78489a79eec0F183B3437577A78b3e19';

const userLinkupABI = [
	{
		inputs: [{ internalType: 'address', name: 'linkupAddress', type: 'address' }],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		inputs: [],
		name: 'count',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'uint256', name: '_linkup_id', type: 'uint256' },
			{ internalType: 'uint256', name: '_user_id', type: 'uint256' },
			{ internalType: 'string', name: '_response', type: 'string' },
		],
		name: 'create',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getAll',
		outputs: [
			{
				components: [
					{ internalType: 'uint256', name: 'id', type: 'uint256' },
					{ internalType: 'uint256', name: 'linkup_id', type: 'uint256' },
					{ internalType: 'uint256', name: 'user_id', type: 'uint256' },
					{ internalType: 'string', name: 'response', type: 'string' },
				],
				internalType: 'struct UserLinkup.UserLinkupStruct[]',
				name: '',
				type: 'tuple[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [{ internalType: 'uint256', name: '_user_id', type: 'uint256' }],
		name: 'getLinkups',
		outputs: [
			{
				components: [
					{ internalType: 'address', name: 'owner', type: 'address' },
					{ internalType: 'string', name: 'status', type: 'string' },
					{ internalType: 'string', name: 'description', type: 'string' },
					{ internalType: 'string', name: 'location', type: 'string' },
					{ internalType: 'uint256', name: 'startTime', type: 'uint256' },
					{ internalType: 'uint256', name: 'endTime', type: 'uint256' },
					{ internalType: 'address[]', name: 'attendees', type: 'address[]' },
				],
				internalType: 'struct Linkup.LinkupStruct[]',
				name: '',
				type: 'tuple[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'linkupContract',
		outputs: [{ internalType: 'contract Linkup', name: '', type: 'address' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'uint256', name: '', type: 'uint256' },
			{ internalType: 'uint256', name: '', type: 'uint256' },
		],
		name: 'linkups',
		outputs: [{ internalType: 'uint256', name: 'user_id', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		name: 'userLinkups',
		outputs: [
			{ internalType: 'uint256', name: 'id', type: 'uint256' },
			{ internalType: 'uint256', name: 'linkup_id', type: 'uint256' },
			{ internalType: 'uint256', name: 'user_id', type: 'uint256' },
			{ internalType: 'string', name: 'response', type: 'string' },
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'uint256', name: '', type: 'uint256' },
			{ internalType: 'uint256', name: '', type: 'uint256' },
		],
		name: 'users',
		outputs: [{ internalType: 'uint256', name: 'linkup_id', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function',
	},
];

exports.userLinkupAddress = userLinkupAddress;
exports.userLinkupABI = userLinkupABI;
