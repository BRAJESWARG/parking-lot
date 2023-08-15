// ParkingSystem.js
import React, { useState, useEffect } from 'react';
import ParkingFloor from './ParkingFloor';

// A functional component that represents the whole parking system with multiple floors
const ParkingSystem = ({ numFloors, numLots }) => {
  // Use the useState hook to create a state variable called floors
  const [floors, setFloors] = useState([]);

  // Use the useEffect hook to initialize the state with some default values
  useEffect(() => {
    let initialFloors = [];
    for (let i = 0; i < numFloors; i++) {
      let lots = [];
      for (let j = 0; j < numLots; j++) {
        lots.push({
          id: j,
          vehicle: null, // 'car', 'bike', or null
          startTime: null // Start time of parking in milliseconds
        });
      }
      initialFloors.push({
        number: i,
        lots: lots
      });
    }
    setFloors(initialFloors);
  }, [numFloors, numLots]);

  // A function that handles the parking logic and updates the state
  const handleParking = (floorNumber, lotId, vehicle) => {
    let newFloors = [...floors];
    let floor = newFloors[floorNumber];
    let lot = floor.lots[lotId];
    if (vehicle) {
      // Park
      // Check if there is space available
      if (isSpaceAvailable(vehicle)) {
        // Update the state
        lot.vehicle = vehicle;
        lot.startTime = Date.now(); // Store the start time in milliseconds
        setFloors(newFloors);
        alert(`Parked ${vehicle} on floor ${floorNumber}, lot ${lotId}`);
      } else {
        alert('No space available for parking');
      }
    } else {
      // Unpark
      // Calculate the charges based on the vehicle type and duration
      let endTime = Date.now();
      let duration = (endTime - lot.startTime) / 1000; // Duration in seconds
      let rate = vehicle === 'car' ? 10 : 5; // Rate per second in rupees
      let charges = rate * duration;
      // Update the state
      lot.vehicle = null;
      lot.startTime = null;
      setFloors(newFloors);
      alert(
        `Unparked ${vehicle} from floor ${floorNumber}, lot ${lotId}. Charges: Rs. ${charges}`
      );
    }
  };

  // A function that checks if there is space available for parking a given vehicle type
  const isSpaceAvailable = (vehicle) => {
    for (let floor of floors) {
      for (let lot of floor.lots) {
        if (!lot.vehicle) {
          // Empty lot
          return true;
        } else if (vehicle === 'bike' && lot.vehicle === 'bike') {
          // Two bikes can share a lot
          return true;
        }
      }
    }
    return false;
  };

  // Render a list of ParkingFloor components
  let floorsList = floors.map((floor) => (
    <ParkingFloor key={floor.number} floor={floor} onPark={handleParking} />
  ));
  return <div>{floorsList}</div>;
};

export default ParkingSystem;