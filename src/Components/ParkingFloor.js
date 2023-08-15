import React, { useState } from 'react';
import ParkingLot from './ParkingLot';

const ParkingFloor = (props) => {
  const [lots, setLots] = useState(props.floor.lots);

  const handleParking = (lotId, vehicle) => {
    let newLots = [...lots];
    newLots[lotId].vehicle = vehicle;
    setLots(newLots);
    props.onPark(props.floor.number, lotId, vehicle);
  };

  let lotsList = lots.map((lot) => (
    <ParkingLot key={lot.id} lot={lot} onPark={handleParking} />
  ));
  return (
    <div>
      <h3>Floor {props.floor.number}</h3>
      <div className="grid">{lotsList}</div>
    </div>
  );
};

export default ParkingFloor;
