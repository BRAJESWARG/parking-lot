// ParkingLot.js
import React from 'react';

// A functional component that represents a single parking lot
const ParkingLot = ({ lot, onPark }) => {
  // Handle parking or unparking by calling the onPark prop
  const handleParking = () => {
    let vehicle = lot.vehicle;
    if (vehicle) {
      // Unpark
      onPark(lot.id, null);
    } else {
      // Park
      vehicle = prompt('Enter vehicle type (car or bike)');
      if (vehicle === 'car' || vehicle === 'bike') {
        onPark(lot.id, vehicle);
      } else {
        alert('Invalid vehicle type');
      }
    }
  };

  // Render a button that shows the vehicle type or an empty slot
  let buttonText = lot.vehicle ? lot.vehicle.toUpperCase() : 'EMPTY';
  let buttonColor = lot.vehicle ? (lot.vehicle === 'car' ? 'red' : 'green') : 'gray';
  return (
    <button style={{ backgroundColor: buttonColor }} onClick={handleParking}>
      {buttonText}
    </button>
  );
};

export default ParkingLot;