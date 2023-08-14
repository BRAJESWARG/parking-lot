// ParkingFloor.js
import React from 'react';
import ParkingLot from './ParkingLot';

// A functional component that represents a single floor of the parking system
const ParkingFloor = ({ floor, onPark }) => {
  // Render a grid of ParkingLot components
  let lots = floor.lots.map((lot) => (
    <ParkingLot key={lot.id} lot={lot} onPark={onPark} />
  ));
  return (
    <div>
      <h3>Floor {floor.number}</h3>
      <div className="grid">{lots}</div>
    </div>
  );
};

export default ParkingFloor;