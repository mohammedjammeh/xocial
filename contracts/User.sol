// SPDX-License-Identifier: MIT

pragma solidity >=0.8.0 <0.9.0;

contract User {
	struct UserStruct {
		uint256 id;
		address owner;
		string fullname;
		string[] musicTaste;
		string[] foodTaste;
		string[] sportsTaste;
	}

	mapping(uint256 => UserStruct) public users;

	uint256 public count = 0;

	event UserCreated(address indexed userAddress, UserStruct user);
	event UserUpdated(address indexed userAddress, UserStruct user);

	/*
	 * CRUD
	 */
	function create(
		string memory _fullname,
		string[] memory _musicTaste,
		string[] memory _foodTaste,
		string[] memory _sportsTaste
	) public {
		UserStruct storage user = users[count];

		user.id = count;
		user.owner = msg.sender;
		user.fullname = _fullname;
		user.musicTaste = _musicTaste;
		user.foodTaste = _foodTaste;
		user.sportsTaste = _sportsTaste;

		emit UserCreated(msg.sender, user);

		count++;
	}

	function update(
		uint256 _id,
		string memory _fullname,
		string[] memory _musicTaste,
		string[] memory _foodTaste,
		string[] memory _sportsTaste
	) public {
		UserStruct storage user = users[_id];

		require(user.owner == msg.sender, 'User not found.');

		user.fullname = _fullname;
		user.musicTaste = _musicTaste;
		user.foodTaste = _foodTaste;
		user.sportsTaste = _sportsTaste;

		emit UserUpdated(msg.sender, user);
	}

	function get(uint256 _user_id) public view returns (UserStruct memory) {
		return users[_user_id];
	}

	function getAll() public view returns (UserStruct[] memory) {
		return getAllWithCount(count);
	}

	function getUnconnectedAll() public view returns (UserStruct[] memory) {
		return getAllWithCount(3);
	}

	function getAllWithCount(uint _count) private view returns (UserStruct[] memory) {
		UserStruct[] memory all = new UserStruct[](_count);

		for (uint i = 0; i < _count; i++) {
			UserStruct storage item = users[i];

			all[i] = item;
		}

		return all;
	}
}
