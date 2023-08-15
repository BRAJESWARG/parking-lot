import React, { useState, useEffect } from 'react';
import ParkingFloor from './ParkingFloor';

const ParkingSystem = (props) => {
  const [floors, setFloors] = useState(props.floors); 
  
  const [unparkedVehicle, setUnparkedVehicle] = useState(null)
  useEffect(() => {
    setFloors(props.floors);
  }, [props.floors]);

  const handleParking = (floorNumber, lotId, vehicle) => {
    console.log(vehicle);
    let newFloors = [...floors];
    let floor = newFloors[floorNumber];
    let lot = floor.lots[lotId];

    if (vehicle) {
      // Park
      if (isSpaceAvailable(vehicle)) {
        setUnparkedVehicle(vehicle);

        lot.vehicle = vehicle;
        lot.startTime = Date.now(); // Store the start time in milliseconds
        setFloors(newFloors);
        alert(`Parked ${vehicle} on floor ${floorNumber}, lot ${lotId}`);
      } else {
        alert('No space available for parking');
      }
    } else {
      // Unpark
      let endTime = Date.now();
      let duration = (endTime - lot.startTime) / 1000; // Duration in seconds
      let rate = unparkedVehicle === 'car' ? 10 : 5; // Rate per second in rupees
      let charges = rate * duration;
      console.log(unparkedVehicle);
      // Update the state
      lot.vehicle = null;
      lot.startTime = null;
      setFloors(newFloors);
      alert(
        `Unparked ${unparkedVehicle} from floor ${floorNumber}, lot ${lotId}. Charges: Rs. ${charges}`
      );
    }
  };

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

  let floorsList = floors.map((floor) => (
    <ParkingFloor key={floor.number} floor={floor} onPark={handleParking} />
  ));
  return <div>{floorsList}</div>;
};

export default ParkingSystem;