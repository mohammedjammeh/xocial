const userLinkupAddress = '0xBC5a29fd72C6A9064d2A76471C2598244e8a6325';

const userLinkupABI = [
	{
		inputs: [{ internalType: 'address[]', name: 'addresses', type: 'address[]' }],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: 'address', name: 'userAddress', type: 'address' },
			{
				components: [
					{ internalType: 'uint256', name: 'id', type: 'uint256' },
					{ internalType: 'address', name: 'owner', type: 'address' },
					{ internalType: 'string', name: 'status', type: 'string' },
					{ internalType: 'string', name: 'description', type: 'string' },
					{ internalType: 'string', name: 'location', type: 'string' },
					{ internalType: 'uint256', name: 'startTime', type: 'uint256' },
					{ internalType: 'uint256', name: 'endTime', type: 'uint256' },
				],
				indexed: false,
				internalType: 'struct Linkup.LinkupStruct',
				name: 'linkup',
				type: 'tuple',
			},
		],
		name: 'UserLinkupCreated',
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
			{ internalType: 'uint256', name: '_user_id', type: 'uint256' },
			{ internalType: 'uint256', name: '_linkup_id', type: 'uint256' },
			{ internalType: 'uint256', name: '_from_user_id', type: 'uint256' },
		],
		name: 'create',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'string', name: '_status', type: 'string' },
			{ internalType: 'string', name: '_description', type: 'string' },
			{ internalType: 'string', name: '_location', type: 'string' },
			{ internalType: 'uint256', name: '_startTime', type: 'uint256' },
			{ internalType: 'uint256', name: '_endTime', type: 'uint256' },
			{ internalType: 'uint256', name: '_creator_id', type: 'uint256' },
			{ internalType: 'uint256', name: '_to_user_id', type: 'uint256' },
		],
		name: 'createLinkupPlusUserLinkup',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [{ internalType: 'uint256', name: '_user_linkup_id', type: 'uint256' }],
		name: 'get',
		outputs: [
			{
				components: [
					{ internalType: 'uint256', name: 'id', type: 'uint256' },
					{ internalType: 'uint256', name: 'linkup_id', type: 'uint256' },
					{ internalType: 'uint256', name: 'user_id', type: 'uint256' },
					{ internalType: 'uint256', name: 'response', type: 'uint256' },
					{ internalType: 'uint256', name: 'from_user_id', type: 'uint256' },
				],
				internalType: 'struct UserLinkup.UserLinkupsPivot',
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
					{ internalType: 'uint256', name: 'linkup_id', type: 'uint256' },
					{ internalType: 'uint256', name: 'user_id', type: 'uint256' },
					{ internalType: 'uint256', name: 'response', type: 'uint256' },
					{ internalType: 'uint256', name: 'from_user_id', type: 'uint256' },
				],
				internalType: 'struct UserLinkup.UserLinkupsPivot[]',
				name: '',
				type: 'tuple[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [{ internalType: 'uint256', name: '_linkup_id', type: 'uint256' }],
		name: 'getLinkupUserPivots',
		outputs: [
			{
				components: [
					{ internalType: 'uint256', name: 'id', type: 'uint256' },
					{ internalType: 'uint256', name: 'linkup_id', type: 'uint256' },
					{ internalType: 'uint256', name: 'user_id', type: 'uint256' },
					{ internalType: 'uint256', name: 'response', type: 'uint256' },
					{ internalType: 'uint256', name: 'from_user_id', type: 'uint256' },
				],
				internalType: 'struct UserLinkup.UserLinkupsPivot[]',
				name: '',
				type: 'tuple[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [{ internalType: 'uint256', name: '_linkup_id', type: 'uint256' }],
		name: 'getLinkupUsers',
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
		inputs: [{ internalType: 'uint256', name: '_user_id', type: 'uint256' }],
		name: 'getUserLinkups',
		outputs: [
			{
				components: [
					{ internalType: 'uint256', name: 'id', type: 'uint256' },
					{ internalType: 'address', name: 'owner', type: 'address' },
					{ internalType: 'string', name: 'status', type: 'string' },
					{ internalType: 'string', name: 'description', type: 'string' },
					{ internalType: 'string', name: 'location', type: 'string' },
					{ internalType: 'uint256', name: 'startTime', type: 'uint256' },
					{ internalType: 'uint256', name: 'endTime', type: 'uint256' },
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
		name: 'linkupUsers',
		outputs: [{ internalType: 'uint256', name: 'user_linkup_id', type: 'uint256' }],
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
	{
		inputs: [
			{ internalType: 'uint256', name: '', type: 'uint256' },
			{ internalType: 'uint256', name: '', type: 'uint256' },
		],
		name: 'userLinkups',
		outputs: [{ internalType: 'uint256', name: 'user_linkup_id', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		name: 'userLinkupsPivot',
		outputs: [
			{ internalType: 'uint256', name: 'id', type: 'uint256' },
			{ internalType: 'uint256', name: 'linkup_id', type: 'uint256' },
			{ internalType: 'uint256', name: 'user_id', type: 'uint256' },
			{ internalType: 'uint256', name: 'response', type: 'uint256' },
			{ internalType: 'uint256', name: 'from_user_id', type: 'uint256' },
		],
		stateMutability: 'view',
		type: 'function',
	},
];

exports.userLinkupAddress = userLinkupAddress;
exports.userLinkupABI = userLinkupABI;
