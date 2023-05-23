module.exports = [
	{
		inputs: [],
		name: 'count',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'uint256', name: '_link_up_id', type: 'uint256' },
			{ internalType: 'uint256', name: '_user_id', type: 'uint256' },
			{ internalType: 'string', name: '_response', type: 'string' },
		],
		name: 'create',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		name: 'linkUpUsers',
		outputs: [
			{ internalType: 'uint256', name: 'link_up_id', type: 'uint256' },
			{ internalType: 'uint256', name: 'user_id', type: 'uint256' },
			{ internalType: 'string', name: 'response', type: 'string' },
		],
		stateMutability: 'view',
		type: 'function',
	},
];
