// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

contract EventContract {
	struct Event {
		address owner;
		string name;
		string description;
		string location;
		uint256 moment;
		address[] attendees;
		uint256[] attendessPayments;
		uint256 totalPayed;
	}

	mapping(uint256 => Event) public events;

	uint256 public eventsCount = 0;

	function create(
		address _owner,
		string memory _name,
		string memory _description,
		string memory _location,
		uint256 _moment
	) public returns (uint256) {
		Event storage newEvent = events[eventsCount];

		require(_moment < block.timestamp, 'Event should be in the future.');

		newEvent.owner = _owner;
		newEvent.name = _name;
		newEvent.description = _description;
		newEvent.location = _location;
		newEvent.moment = _moment;

		eventsCount++;

		return eventsCount - 1;
	}

	function attend(uint256 _id) public payable {
		uint256 amount = msg.value;

		Event storage existingEvent = events[_id];

		existingEvent.attendees.push(msg.sender);

		(bool sent, ) = payable(existingEvent.owner).call{value: amount}('');

		if (sent) {
			existingEvent.totalPayed = existingEvent.totalPayed + amount;
		}
	}

	function getAttendees(
		uint256 _id
	) public view returns (address[] memory, uint256[] memory) {
		return (events[_id].attendees, events[_id].attendessPayments);
	}

	function getEvents() public view returns (Event[] memory) {
		Event[] memory allEvents = new Event[](eventsCount);

		for (uint i = 0; i < eventsCount; i++) {
			Event storage item = events[i];

			allEvents[i] = item;
		}

		return allEvents;
	}
}
