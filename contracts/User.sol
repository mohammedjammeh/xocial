// SPDX-License-Identifier: MIT

pragma solidity >=0.8.0 <0.9.0;

contract User {
	struct UserStruct {
		address owner;
		string fullname;
		string[] musicTaste;
		string[] foodTaste;
		string[] sportsTaste;
		uint256[] contacts;
	}

	mapping(uint256 => UserStruct) public users;

	uint256 public count = 0;

	/*
	 * CRUD
	 */
	function create(
		address _owner,
		string memory _fullname,
		string[] memory _musicTaste,
		string[] memory _foodTaste,
		string[] memory _sportsTaste
	) public returns (uint256) {
		UserStruct storage user = users[count];

		user.owner = _owner;
		user.fullname = _fullname;
		user.musicTaste = _musicTaste;
		user.foodTaste = _foodTaste;
		user.sportsTaste = _sportsTaste;

		count++;

		return count - 1;
	}

	function update(
		uint256 _id,
		string memory _fullname,
		string[] memory _musicTaste,
		string[] memory _foodTaste,
		string[] memory _sportsTaste
	) public {
		UserStruct storage user = users[_id];

		user.fullname = _fullname;
		user.musicTaste = _musicTaste;
		user.foodTaste = _foodTaste;
		user.sportsTaste = _sportsTaste;
	}

	function getAll() public view returns (UserStruct[] memory) {
		UserStruct[] memory allUsers = new UserStruct[](count);

		for (uint i = 0; i < count; i++) {
			UserStruct storage item = users[i];

			allUsers[i] = item;
		}

		return allUsers;
	}

	/*
	 * Links
	 */
	function addLink(uint256 user_id, uint256 contact_id) public {
		UserStruct storage user = users[user_id];

		user.contacts.push(contact_id);
	}
}
