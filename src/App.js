import React from 'react';
import './App.css'; // Import the CSS styles
import CurrentStateLahore from './Compoenents/LahoreElectricity/currentState';
import CurrentStateRahimYarKhan from './Compoenents/RahimYarKhanElectricity/currentState';

const App = () => {
  let electricityLahore = true;
  let electricityRahimYarKhan = false;
  
  return (
    <div className="app-container">
     
      <div className="city-container">
        <div className="city-header">Lahore Electricity Status</div>
        <CurrentStateLahore electricityStatus={electricityLahore} />
      </div>

      <div className="city-container">
        <div className="city-header">Rahim Yar Khan Electricity Status</div>
        <CurrentStateRahimYarKhan electricityStatus={electricityRahimYarKhan} />
      </div>

      <footer>
        <p>&copy; 2024 Electricity Status App. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
// main app cities electricity handle (2 inpputs)
// lights on Lights off  <LightsOn >   <LightsOff>
// cities ki base 
// LahoreElectricity
// app
// pass eletrcitity status true / false
//Header App Title Lahore (Lahore Component (2 inputs -> Lights On Lgihts Off))