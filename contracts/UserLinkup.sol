// SPDX-License-Identifier: MIT

pragma solidity >=0.8.0 <0.9.0;

contract UserLinkup {
	struct UserLinkupStruct {
		uint256 id;
		uint256 linkup_id;
		uint256 user_id;
		string response;
	}

	struct Linkups {
		uint userLinkupID;
	}

	struct Users {
		uint userLinkupID;
	}

	mapping(uint256 => UserLinkupStruct) public userLinkups;
	mapping(uint256 => Linkups[]) public linkups;
	mapping(uint256 => Users[]) public users;

	uint256 public count = 0;

	/*
	 * CRUD
	 */
	function create(uint256 _linkup_id, uint256 _user_id, string memory _response) public returns (uint256) {
		UserLinkupStruct storage linkup = userLinkups[count];

		linkup.id = count;
		linkup.linkup_id = _linkup_id;
		linkup.user_id = _user_id;
		linkup.response = _response;

		linkups[_linkup_id].push(Linkups(linkup.id));

		count++;

		return count - 1;
	}

	function get(uint _linkup_id) public view returns (Linkups[] memory) {
		return linkups[_linkup_id];
	}

	function getAll() public view returns (UserLinkupStruct[] memory) {
		UserLinkupStruct[] memory allUserLinkups = new UserLinkupStruct[](count);

		for (uint i = 0; i < count; i++) {
			UserLinkupStruct memory item = userLinkups[i];

			allUserLinkups[i] = item;
		}

		return allUserLinkups;
	}
}
