const userAddress = '0xf23A4B54a98b71Bd2C5621ADbbCfA17a3d0ea628';

const userABI = [
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: 'address', name: 'userAddress', type: 'address' },
			{
				components: [
					{ internalType: 'uint256', name: 'id', type: 'uint256' },
					{ internalType: 'address', name: 'owner', type: 'address' },
					{ internalType: 'string', name: 'fullname', type: 'string' },
					{ internalType: 'string[]', name: 'musicTaste', type: 'string[]' },
					{ internalType: 'string[]', name: 'foodTaste', type: 'string[]' },
					{ internalType: 'string[]', name: 'sportsTaste', type: 'string[]' },
				],
				indexed: false,
				internalType: 'struct User.UserStruct',
				name: 'user',
				type: 'tuple',
			},
		],
		name: 'UserCreated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: 'address', name: 'userAddress', type: 'address' },
			{
				components: [
					{ internalType: 'uint256', name: 'id', type: 'uint256' },
					{ internalType: 'address', name: 'owner', type: 'address' },
					{ internalType: 'string', name: 'fullname', type: 'string' },
					{ internalType: 'string[]', name: 'musicTaste', type: 'string[]' },
					{ internalType: 'string[]', name: 'foodTaste', type: 'string[]' },
					{ internalType: 'string[]', name: 'sportsTaste', type: 'string[]' },
				],
				indexed: false,
				internalType: 'struct User.UserStruct',
				name: 'user',
				type: 'tuple',
			},
		],
		name: 'UserUpdated',
		type: 'event',
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
			{ internalType: 'string', name: '_fullname', type: 'string' },
			{ internalType: 'string[]', name: '_musicTaste', type: 'string[]' },
			{ internalType: 'string[]', name: '_foodTaste', type: 'string[]' },
			{ internalType: 'string[]', name: '_sportsTaste', type: 'string[]' },
		],
		name: 'create',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [{ internalType: 'uint256', name: '_user_id', type: 'uint256' }],
		name: 'get',
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
				internalType: 'struct User.UserStruct',
				name: '',
				type: 'tuple',
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
			{ internalType: 'uint256', name: '_id', type: 'uint256' },
			{ internalType: 'string', name: '_fullname', type: 'string' },
			{ internalType: 'string[]', name: '_musicTaste', type: 'string[]' },
			{ internalType: 'string[]', name: '_foodTaste', type: 'string[]' },
			{ internalType: 'string[]', name: '_sportsTaste', type: 'string[]' },
		],
		name: 'update',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		name: 'users',
		outputs: [
			{ internalType: 'uint256', name: 'id', type: 'uint256' },
			{ internalType: 'address', name: 'owner', type: 'address' },
			{ internalType: 'string', name: 'fullname', type: 'string' },
		],
		stateMutability: 'view',
		type: 'function',
	},
];

exports.userAddress = userAddress;
exports.userABI = userABI;
