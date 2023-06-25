// SPDX-License-Identifier: MIT

pragma solidity >=0.8.0 <0.9.0;

import './User.sol';

contract UserContact {
	mapping(uint256 => uint256[]) public userContacts;

	event UserContactCreated(address indexed to, uint256 contactID);
	event UserContactDestroyed(address indexed to, uint256 contactID);

	User public userContract;

	constructor(address[] memory addresses) {
		userContract = User(addresses[0]);
	}

	/*
	 * CRUD
	 */
	function create(uint256 _user_id, uint256 _contact_id) public {
		userContacts[_user_id].push(_contact_id);

		emit UserContactCreated(msg.sender, _contact_id);
	}

	function destroy(uint256 _user_id, uint256 _contact_id) public {
		uint256[] storage contacts = userContacts[_user_id];
		uint256 contactsCount = contacts.length;

		for (uint256 i = 0; i < contactsCount; i++) {
			if (contacts[i] == _contact_id && i < contactsCount) {
				contacts[i] = contacts[contactsCount - 1];
				contacts.pop();
			}
		}

		emit UserContactDestroyed(msg.sender, _contact_id);
	}

	function getContacts(uint256 _user_id) public view returns (User.UserStruct[] memory) {
		uint256[] memory contacts = userContacts[_user_id];
		uint256 contactsCount = contacts.length;

		User.UserStruct[] memory all = new User.UserStruct[](contactsCount);

		for (uint256 i = 0; i < contactsCount; i++) {
			all[i] = userContract.get(contacts[i]);
		}

		return all;
	}
}
