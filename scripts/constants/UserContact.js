const userContactAddress = '0xA5610fD28CA2456cae8fE1716E0a667A186f2dc0';

const userContactABI = [
	{
		inputs: [{ internalType: 'address[]', name: 'addresses', type: 'address[]' }],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		inputs: [
			{ internalType: 'uint256', name: '_user_id', type: 'uint256' },
			{ internalType: 'uint256', name: '_contact_id', type: 'uint256' },
		],
		name: 'create',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'uint256', name: '_user_id', type: 'uint256' },
			{ internalType: 'uint256', name: '_contact_id', type: 'uint256' },
		],
		name: 'destroy',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [{ internalType: 'uint256', name: '_user_id', type: 'uint256' }],
		name: 'getContacts',
		outputs: [
			{
				components: [
					{ internalType: 'uint256', name: 'id', type: 'uint256' },
					{ internalType: 'address', name: 'owner', type: 'address' },
					{ internalType: 'string', name: 'fullname', type: 'string' },
					{ internalType: 'string[]', name: 'musicTaste', type: 'string[]' },
					{ internalType: 'string[]', name: 'foodTaste', type: 'string[]' },
					{ internalType: 'string[]', name: 'sportsTaste', type: 'string[]' },
				],
				internalType: 'struct User.UserStruct[]',
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
		name: 'userContacts',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'userContract',
		outputs: [{ internalType: 'contract User', name: '', type: 'address' }],
		stateMutability: 'view',
		type: 'function',
	},
];

exports.userContactAddress = userContactAddress;
exports.userContactABI = userContactABI;
