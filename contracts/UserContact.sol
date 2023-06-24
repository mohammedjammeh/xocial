// SPDX-License-Identifier: MIT

pragma solidity >=0.8.0 <0.9.0;

import './User.sol';

contract UserContact {
	struct Pivot {
		uint256 id;
		uint256 contact_id;
		uint256 user_id;
		bool active;
	}

	struct UserContactStruct {
		uint256 user_contact_id;
	}

	mapping(uint256 => Pivot) public pivots;
	mapping(uint256 => UserContactStruct[]) public userContacts;

	uint256 public count = 0;

	event UserContactCreated(address indexed to, Pivot userContact);
	event UserContactDestroyed(address indexed to, Pivot userContact);

	User public userContract;

	constructor(address[] memory addresses) {
		userContract = User(addresses[0]);
	}

	/*
	 * CRUD
	 */
	function create(uint256 _user_id, uint256 _contact_id) public {
		Pivot storage userContact = pivots[count];

		userContact.id = count;
		userContact.user_id = _user_id;
		userContact.contact_id = _contact_id;
		userContact.active = true;

		userContacts[_user_id].push(UserContactStruct(userContact.id));

		emit UserContactCreated(msg.sender, userContact);

		count++;
	}

	function destroy(uint256 _user_contact_id) public {
		Pivot storage userContact = pivots[_user_contact_id];

		userContact.active = false;

		emit UserContactDestroyed(msg.sender, userContact);
	}

	function get(uint256 _user_contact_id) public view returns (Pivot memory) {
		return pivots[_user_contact_id];
	}

	function getAll() public view returns (Pivot[] memory) {
		Pivot[] memory all = new Pivot[](count);

		for (uint i = 0; i < count; i++) {
			Pivot memory item = pivots[i];

			all[i] = item;
		}

		return all;
	}

	function getContacts(uint256 _user_id) public view returns (User.UserStruct[] memory) {
		UserContactStruct[] memory allUserContacts = userContacts[_user_id];
		uint256 userContactsCount = allUserContacts.length;
		User.UserStruct[] memory all = new User.UserStruct[](userContactsCount);

		for (uint256 i = 0; i < userContactsCount; i++) {
			uint256 userContactID = allUserContacts[i].user_contact_id;

			Pivot memory userContact = get(userContactID);

			all[i] = userContract.get(userContact.contact_id);
		}

		return all;
	}
}
