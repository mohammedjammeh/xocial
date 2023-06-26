// SPDX-License-Identifier: MIT

pragma solidity >=0.8.0 <0.9.0;

import './UserLinkup.sol';

contract Linkup {
	struct LinkupStruct {
		uint256 id;
		address owner;
		string status;
		string description;
		string location;
		uint256 startTime;
		uint256 endTime;
		address[] attendees;
	}

	mapping(uint256 => LinkupStruct) public linkups;

	event NewLinkup(LinkupStruct linkup);

	uint256 public count = 0;

	UserLinkup public userLinkupContract;

	constructor(address[] memory addresses) {
		userLinkupContract = UserLinkup(addresses[0]);
	}

	/*
	 * CRUD
	 */
	function create(
		address _owner,
		string memory _status,
		string memory _description,
		string memory _location,
		uint256 _startTime,
		uint256 _endTime,
		address[] memory _attendees
	) public returns (uint256) {
		LinkupStruct storage linkup = linkups[count];

		linkup.id = count;
		linkup.owner = _owner;
		linkup.status = _status;
		linkup.description = _description;
		linkup.location = _location;
		linkup.startTime = _startTime;
		linkup.endTime = _endTime;
		linkup.attendees = _attendees;

		count++;

		emit NewLinkup(linkup);

		return count - 1;
	}

	function get(uint256 _linkup_id) public view returns (LinkupStruct memory) {
		return linkups[_linkup_id];
	}

	function getAll() public view returns (LinkupStruct[] memory) {
		LinkupStruct[] memory all = new LinkupStruct[](count);

		for (uint i = 0; i < count; i++) {
			LinkupStruct storage item = linkups[i];

			all[i] = item;
		}

		return all;
	}

	function getAllForUser(uint256 _user_id) public view returns (LinkupStruct[] memory) {
		UserLinkup.UsersLinkups[] memory allUsersLinkups = userLinkupContract.getUserLinkups(_user_id);
		uint256 userLinkupsCount = allUsersLinkups.length;
		LinkupStruct[] memory all = new LinkupStruct[](userLinkupsCount);

		for (uint256 i = 0; i < userLinkupsCount; i++) {
			uint256 userLinkupID = allUsersLinkups[i].user_linkup_id;

			UserLinkup.UserLinkupsPivot memory userLinkup = userLinkupContract.get(userLinkupID);

			all[i] = get(userLinkup.linkup_id);
		}

		return all;
	}
}
