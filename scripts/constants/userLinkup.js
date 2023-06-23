const userLinkupAddress = '0x4C9f7Cb3e02F0ae64D3fa199dbE1c36cf7b93010';

const userLinkupABI = [
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
		inputs: [{ internalType: 'uint256', name: '_linkup_id', type: 'uint256' }],
		name: 'get',
		outputs: [
			{
				components: [{ internalType: 'uint256', name: 'userLinkupID', type: 'uint256' }],
				internalType: 'struct UserLinkup.Linkups[]',
				name: '',
				type: 'tuple[]',
			},
		],
		stateMutability: 'view',
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
		inputs: [
			{ internalType: 'uint256', name: '', type: 'uint256' },
			{ internalType: 'uint256', name: '', type: 'uint256' },
		],
		name: 'linkups',
		outputs: [{ internalType: 'uint256', name: 'userLinkupID', type: 'uint256' }],
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
		outputs: [{ internalType: 'uint256', name: 'userLinkupID', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function',
	},
];

exports.userLinkupAddress = userLinkupAddress;
exports.userLinkupABI = userLinkupABI;
