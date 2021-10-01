import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './Header';
import DesignAdd from './Addesigner';
import Ads from './Ads';
import Votes from './Votes';

function App() {
  return (
    <div className="App">
       <Header/>
      <main>
        <div className="App_ads">
          <Ads pickFlavor="Chocolate Chip Cookiedough" fontSize={42} lightPicked/>
          <Ads pickFlavor="Moose Tracks" fontSize={50} />
          <Ads pickFlavor="Apple Crisp" fontSize={42} />
        </div>
        <div className="App_activities">
          <DesignAdd />
          <Votes />
        </div>
      </main>
        
    </div>
  );
}

export default App;
