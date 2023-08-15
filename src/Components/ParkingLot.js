import React, { useState } from 'react';

const ParkingLot = (props) => {
  const [vehicle, setVehicle] = useState(props.lot.vehicle); // 'car', 'bike', or null
  // console.log(vehicle);
  const handleParking = () => {
    let parkedVehicle = vehicle;

    if (parkedVehicle) {
      // Unpark
      setVehicle(null);
      props.onPark(props.lot.id, null);
    } else {
      // Park
      parkedVehicle = prompt('Enter vehicle type (car or bike)');
      if (parkedVehicle === 'car' || parkedVehicle === 'bike') {
        setVehicle(parkedVehicle);
        props.onPark(props.lot.id, parkedVehicle);
      } else {
        alert('Invalid vehicle type');
      }
    }
  };

  let buttonText = vehicle ? vehicle.toUpperCase() : 'EMPTY';
  let buttonColor = vehicle ? (vehicle === 'car' ? 'red' : 'green') : 'gray';
  return (
    <button style={{ backgroundColor: buttonColor }} onClick={handleParking}>
      {buttonText}
    </button>
  );
};

export default ParkingLot;
