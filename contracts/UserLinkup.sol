// SPDX-License-Identifier: MIT

pragma solidity >=0.8.0 <0.9.0;

import './Linkup.sol';

contract UserLinkup {
	struct UserLinkupStruct {
		uint256 id;
		uint256 linkup_id;
		uint256 user_id;
		string response;
	}

	struct Linkups {
		uint256 user_id;
	}

	struct Users {
		uint256 linkup_id;
	}

	mapping(uint256 => UserLinkupStruct) public userLinkups;
	mapping(uint256 => Linkups[]) public linkups;
	mapping(uint256 => Users[]) public users;

	uint256 public count = 0;

	Linkup public linkupContract;

	constructor(address linkupAddress) {
		linkupContract = Linkup(linkupAddress);
	}

	/*
	 * CRUD
	 */
	function create(uint256 _user_id, uint256 _linkup_id, string memory _response) public returns (uint256) {
		UserLinkupStruct storage userLinkup = userLinkups[count];

		userLinkup.id = count;
		userLinkup.linkup_id = _linkup_id;
		userLinkup.user_id = _user_id;
		userLinkup.response = _response;

		linkups[_linkup_id].push(Linkups(userLinkup.id));
		users[_user_id].push(Users(userLinkup.id));

		count++;

		return count - 1;
	}

	function getAll() public view returns (UserLinkupStruct[] memory) {
		UserLinkupStruct[] memory allUserLinkups = new UserLinkupStruct[](count);

		for (uint i = 0; i < count; i++) {
			UserLinkupStruct memory item = userLinkups[i];

			allUserLinkups[i] = item;
		}

		return allUserLinkups;
	}

	function getLinkups(uint256 _user_id) public view returns (Linkup.LinkupStruct[] memory) {
		Users[] memory allUserLinkups = users[_user_id];
		uint256 userLinkupsCount = allUserLinkups.length;
		Linkup.LinkupStruct[] memory all = new Linkup.LinkupStruct[](userLinkupsCount);

		for (uint256 i = 0; i < userLinkupsCount; i++) {
			uint256 userLinkupID = allUserLinkups[i].linkup_id;

			all[i] = linkupContract.get(userLinkupID);
		}

		return all;
	}
}
