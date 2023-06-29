// SPDX-License-Identifier: MIT

pragma solidity >=0.8.0 <0.9.0;

import './Linkup.sol';
import './User.sol';

contract UserLinkup {
	struct UserLinkupsPivot {
		uint256 id;
		uint256 linkup_id;
		uint256 user_id;
		uint256 from_user_id;
		bool response;
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

	event UserLinkupCreated(address indexed userAddress, Linkup.LinkupStruct linkup);
	event UserLinkupJoined(address indexed userAddress, Linkup.LinkupStruct linkup);
	event UserLinkupLeft(address indexed userAddress, Linkup.LinkupStruct linkup);

	uint256 public count = 0;

	Linkup public linkupContract;
	User public userContract;

	constructor(address[] memory addresses) {
		linkupContract = Linkup(addresses[0]);
		userContract = User(addresses[1]);
	}

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

		emit UserLinkupCreated(userContract.get(_user_id).owner, linkupContract.get(_linkup_id));

		return count - 1;
	}

	function createLinkupPlusUserLinkup(
		string memory _status,
		string memory _description,
		string memory _location,
		uint256 _startTime,
		uint256 _endTime,
		uint256 _creator_id,
		uint256 _to_user_id
	) public returns (uint256) {
		// add validation,
		// get user
		// ensure msg.sender matches stored _creator_id owner
		// research best easiest web3 auth (v2)

		uint linkupID = linkupContract.create(_status, _description, _location, _startTime, _endTime);

		create(_creator_id, linkupID, _creator_id);

		create(_to_user_id, linkupID, _creator_id);

		return linkupID;
	}

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

	function getLinkupUserPivots(uint _linkup_id) public view returns (UserLinkupsPivot[] memory) {
		LinkupUsers[] memory linkupUserPivots = linkupUsers[_linkup_id];
		uint256 linkupUsersCount = linkupUserPivots.length;
		UserLinkupsPivot[] memory all = new UserLinkupsPivot[](linkupUsersCount);

		for (uint i = 0; i < linkupUsersCount; i++) {
			LinkupUsers memory item = linkupUserPivots[i];

			all[i] = userLinkupsPivot[item.user_linkup_id];
		}

		return all;
	}

	/*
	 * Actions
	 */
	function join(uint256 user_linkup_id) public {
		UserLinkupsPivot storage userLinkup = userLinkupsPivot[user_linkup_id];
		userLinkup.response = true;

		emit UserLinkupJoined(msg.sender, linkupContract.get(userLinkup.linkup_id));
	}

	function leave(uint256 user_linkup_id) public {
		UserLinkupsPivot storage userLinkup = userLinkupsPivot[user_linkup_id];
		userLinkup.response = false;

		emit UserLinkupLeft(msg.sender, linkupContract.get(userLinkup.linkup_id));
	}

	/*
	 * Returns External Structs
	 */
	function getUserLinkups(uint256 _user_id) public view returns (Linkup.LinkupStruct[] memory) {
		UserLinkup.UsersLinkups[] memory allUsersLinkups = userLinkups[_user_id];
		uint256 userLinkupsCount = allUsersLinkups.length;
		Linkup.LinkupStruct[] memory all = new Linkup.LinkupStruct[](userLinkupsCount);

		for (uint256 i = 0; i < userLinkupsCount; i++) {
			uint256 userLinkupID = allUsersLinkups[i].user_linkup_id;

			UserLinkup.UserLinkupsPivot memory userLinkup = get(userLinkupID);

			all[i] = linkupContract.get(userLinkup.linkup_id);
		}

		return all;
	}

	function getLinkupUsers(uint256 _linkup_id) public view returns (User.UserStruct[] memory) {
		UserLinkup.LinkupUsers[] memory allLinkupUsers = linkupUsers[_linkup_id];
		uint256 linkupUsersCount = allLinkupUsers.length;
		User.UserStruct[] memory all = new User.UserStruct[](linkupUsersCount);

		for (uint256 i = 0; i < linkupUsersCount; i++) {
			uint256 userLinkupID = allLinkupUsers[i].user_linkup_id;

			UserLinkup.UserLinkupsPivot memory userLinkup = get(userLinkupID);

			all[i] = userContract.get(userLinkup.user_id);
		}

		return all;
	}
}
