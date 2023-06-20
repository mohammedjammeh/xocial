// SPDX-License-Identifier: MIT

pragma solidity >=0.8.0 <0.9.0;

contract UserContact {
	struct UserContactStruct {
		uint256 contact_id;
		uint256 user_id;
		bool active;
	}

	mapping(uint256 => UserContactStruct) public userContacts;

	uint256 public count = 0;

	event UserContactCreated(address indexed to, UserContactStruct userContact);
	event UserContactDestroyed(address indexed to, UserContactStruct userContact);

	/*
	 * CRUD
	 */
	function create(uint256 _user_id, uint256 _contact_id) public {
		UserContactStruct storage userContact = userContacts[count];

		userContact.user_id = _user_id;
		userContact.contact_id = _contact_id;
		userContact.active = true;

		emit UserContactCreated(msg.sender, userContact);

		count++;
	}

	function destroy(uint256 _user_contact_id) public {
		UserContactStruct storage userContact = userContacts[_user_contact_id];

		userContact.active = false;

		emit UserContactDestroyed(msg.sender, userContact);
	}

	function getAll() public view returns (UserContactStruct[] memory) {
		UserContactStruct[] memory allUserContacts = new UserContactStruct[](count);

		for (uint i = 0; i < count; i++) {
			UserContactStruct memory item = userContacts[i];

			allUserContacts[i] = item;
		}

		return allUserContacts;
	}
}
