// App.js
import React, { useState, useEffect } from 'react';
import ParkingSystem from './Components/ParkingSystem';

// A functional component that is the root component of the application
const App = () => {
  // Use the useState hook to create state variables for numFloors and numLots
  const [numFloors, setNumFloors] = useState(3); // Number of floors in the parking system
  const [numLots, setNumLots] = useState(10); // Number of lots per floor in the parking system

  // A function that generates some initial values for the floors and lots arrays
  const generateInitialValues = () => {
    console.log(setNumFloors);
    console.log(setNumLots);
    let floors = [];
    for (let i = 0; i < numFloors; i++) {
      let lots = [];
      for (let j = 0; j < numLots; j++) {
        lots.push({
          id: j,
          vehicle: null, // 'car', 'bike', or null
          startTime: null // Start time of parking in milliseconds
        });
      }
      floors.push({
        number: i,
        lots: lots
      });
    }
    return floors;
  };

  // Use the useEffect hook to call the generateInitialValues function when the component mounts
  useEffect(() => {
    generateInitialValues();
  });

  // Return the JSX directly from the function body
  return (
    <div className="App">
      <h1>Parking System</h1>
      <ParkingSystem floors={generateInitialValues()} />
      {/* Other components such as header, footer, sidebar, etc. */}
    </div>
  );
};

export default App;