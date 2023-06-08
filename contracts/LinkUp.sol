// SPDX-License-Identifier: MIT

pragma solidity >=0.8.0 <0.9.0;

contract Linkup {
	struct LinkupStruct {
		address owner;
		string name;
		string description;
		string location;
		uint256 moment;
	}

	mapping(uint256 => LinkupStruct) public linkups;

	uint256 public count = 0;

	/*
	 * CRUD
	 */
	function create(
		address _owner,
		string memory _name,
		string memory _description,
		string memory _location,
		uint256 _moment
	) public returns (uint256) {
		LinkupStruct storage linkup = linkups[count];

		linkup.owner = _owner;
		linkup.name = _name;
		linkup.description = _description;
		linkup.location = _location;
		linkup.moment = _moment;

		count++;

		return count - 1;
	}

	function getAll() public view returns (LinkupStruct[] memory) {
		LinkupStruct[] memory allLinkups = new LinkupStruct[](count);

		for (uint i = 0; i < count; i++) {
			LinkupStruct storage item = linkups[i];

			allLinkups[i] = item;
		}

		return allLinkups;
	}
}
