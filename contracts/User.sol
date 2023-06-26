// SPDX-License-Identifier: MIT

pragma solidity >=0.8.0 <0.9.0;

import './UserLinkup.sol';

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

	event UserCreated(UserStruct user, uint256 id);
	event UserUpdated(UserStruct user);

	UserLinkup public userLinkupContract;

	constructor(address[] memory addresses) {
		userLinkupContract = UserLinkup(addresses[0]);
	}

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

		emit UserCreated(user, count);

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

		emit UserUpdated(user);
	}

	function getAll() public view returns (UserStruct[] memory) {
		UserStruct[] memory all = new UserStruct[](count);

		for (uint i = 0; i < count; i++) {
			UserStruct storage item = users[i];

			all[i] = item;
		}

		return all;
	}

	function get(uint256 _user_id) public view returns (UserStruct memory) {
		return users[_user_id];
	}

	function getAllForLinkup(uint256 _linkup_id) public view returns (User.UserStruct[] memory) {
		UserLinkup.LinkupUsers[] memory allLinkupUsers = userLinkupContract.getLinkupUsers(_linkup_id);
		uint256 linkupUsersCount = allLinkupUsers.length;
		User.UserStruct[] memory all = new User.UserStruct[](linkupUsersCount);

		for (uint256 i = 0; i < linkupUsersCount; i++) {
			uint256 userLinkupID = allLinkupUsers[i].user_linkup_id;

			UserLinkup.UserLinkupsPivot memory userLinkup = userLinkupContract.get(userLinkupID);

			all[i] = get(userLinkup.user_id);
		}

		return all;
	}
}
