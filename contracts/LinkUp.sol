// SPDX-License-Identifier: MIT

pragma solidity >=0.8.0 <0.9.0;

contract Linkup {
	struct LinkupStruct {
		uint256 id;
		address owner;
		string status;
		string description;
		string location;
		uint256 startTime;
		uint256 endTime;
	}

	mapping(uint256 => LinkupStruct) public linkups;

	uint256 public count = 0;

	event LinkupCreated(address userAddress, LinkupStruct linkup);

	/*
	 * CRUD
	 */
	function create(
		string memory _status,
		string memory _description,
		string memory _location,
		uint256 _startTime,
		uint256 _endTime
	) public returns (uint256) {
		LinkupStruct storage linkup = linkups[count];

		linkup.id = count;
		linkup.owner = msg.sender;
		linkup.status = _status;
		linkup.description = _description;
		linkup.location = _location;
		linkup.startTime = _startTime;
		linkup.endTime = _endTime;

		emit LinkupCreated(msg.sender, linkup);

		count++;

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
}
