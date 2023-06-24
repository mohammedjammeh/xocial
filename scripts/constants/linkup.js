const linkupAddress = '0xB2290542B349F7E01e22dc8BA6BA3dBEAF8ac150';

const linkupABI = [
	{
		anonymous: false,
		inputs: [
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
				indexed: false,
				internalType: 'struct Linkup.LinkupStruct',
				name: 'linkup',
				type: 'tuple',
			},
		],
		name: 'NewLinkup',
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
			{ internalType: 'address', name: '_owner', type: 'address' },
			{ internalType: 'string', name: '_status', type: 'string' },
			{ internalType: 'string', name: '_description', type: 'string' },
			{ internalType: 'string', name: '_location', type: 'string' },
			{ internalType: 'uint256', name: '_startTime', type: 'uint256' },
			{ internalType: 'uint256', name: '_endTime', type: 'uint256' },
			{ internalType: 'address[]', name: '_attendees', type: 'address[]' },
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
				components: [
					{ internalType: 'address', name: 'owner', type: 'address' },
					{ internalType: 'string', name: 'status', type: 'string' },
					{ internalType: 'string', name: 'description', type: 'string' },
					{ internalType: 'string', name: 'location', type: 'string' },
					{ internalType: 'uint256', name: 'startTime', type: 'uint256' },
					{ internalType: 'uint256', name: 'endTime', type: 'uint256' },
					{ internalType: 'address[]', name: 'attendees', type: 'address[]' },
				],
				internalType: 'struct Linkup.LinkupStruct',
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
		inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		name: 'linkups',
		outputs: [
			{ internalType: 'address', name: 'owner', type: 'address' },
			{ internalType: 'string', name: 'status', type: 'string' },
			{ internalType: 'string', name: 'description', type: 'string' },
			{ internalType: 'string', name: 'location', type: 'string' },
			{ internalType: 'uint256', name: 'startTime', type: 'uint256' },
			{ internalType: 'uint256', name: 'endTime', type: 'uint256' },
		],
		stateMutability: 'view',
		type: 'function',
	},
];

exports.linkupAddress = linkupAddress;
exports.linkupABI = linkupABI;
