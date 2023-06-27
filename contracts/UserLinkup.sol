// SPDX-License-Identifier: MIT

pragma solidity >=0.8.0 <0.9.0;

contract UserLinkup {
	struct UserLinkupsPivot {
		uint256 id;
		uint256 linkup_id;
		uint256 user_id;
		uint256 response;
		uint256 from_user_id;
	}

	struct UsersLinkups {
		uint256 user_linkup_id;
	}

	struct LinkupUsers {
		uint256 user_linkup_id;
	}

	mapping(uint256 => UserLinkupsPivot) public userLinkupsPivot;
	mapping(uint256 => UsersLinkups[]) public userLinkups;
	mapping(uint256 => LinkupUsers[]) public linkupUsers;

	uint256 public count = 0;

	event NewUserLinkup(uint indexed userID, uint linkupID);

	/*
	 * CRUD
	 */
	function create(uint _user_id, uint _linkup_id, uint _from_user_id) public returns (uint) {
		UserLinkupsPivot storage userLinkupPivot = userLinkupsPivot[count];

		userLinkupPivot.id = count;
		userLinkupPivot.linkup_id = _linkup_id;
		userLinkupPivot.user_id = _user_id;
		userLinkupPivot.from_user_id = _from_user_id;

		userLinkups[_user_id].push(UsersLinkups(userLinkupPivot.id));
		linkupUsers[_linkup_id].push(LinkupUsers(userLinkupPivot.id));

		count++;

		emit NewUserLinkup(_user_id, _linkup_id);

		return count - 1;
	}

	// function update(uint256 user_linkup_id, uint response) public returns (uint256) {}

	function get(uint256 _user_linkup_id) public view returns (UserLinkupsPivot memory) {
		return userLinkupsPivot[_user_linkup_id];
	}

	function getAll() public view returns (UserLinkupsPivot[] memory) {
		UserLinkupsPivot[] memory all = new UserLinkupsPivot[](count);

		for (uint i = 0; i < count; i++) {
			UserLinkupsPivot memory item = userLinkupsPivot[i];

			all[i] = item;
		}

		return all;
	}

	function getUserLinkups(uint256 _user_id) public view returns (UsersLinkups[] memory) {
		return userLinkups[_user_id];
	}

	function getLinkupUsers(uint256 _linkup_id) public view returns (LinkupUsers[] memory) {
		return linkupUsers[_linkup_id];
	}
}
