import './App.css';
import ParkingSystem from './Components/ParkingSystem';

function App() {
  return (
    <div className="App">
      <div>
        Hey!
      </div>
      <h1>Parking System</h1>
      <ParkingSystem numFloors={3} numLots={10} />
    </div>
  );
}

export default App;
