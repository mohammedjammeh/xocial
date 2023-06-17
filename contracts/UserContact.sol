// SPDX-License-Identifier: MIT

pragma solidity >=0.8.0 <0.9.0;

contract UserContact {
	struct UserContactStruct {
		uint256 contact_id;
		uint256 user_id;
	}

	mapping(uint256 => UserContactStruct) public userContacts;

	uint256 public count = 0;

	event UserContactCreated(UserContactStruct user);

	/*
	 * CRUD
	 */
	function create(uint256 _user_id, uint256 _contact_id) public {
		UserContactStruct storage userContact = userContacts[count];

		userContact.user_id = _user_id;
		userContact.contact_id = _contact_id;

		emit UserContactCreated(userContact);

		count++;
	}
}
