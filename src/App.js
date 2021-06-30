import { useState } from 'react';
import './App.css';
import Screen2 from './Components/Screen2';
import Screen from './Components/Screen1'
function App() {

  let [region,changeRegion] = useState(0);
  return (
    <div className="App">
      <div className="container">
        {region===0?<Screen changeRegion={changeRegion}></Screen>:<Screen2 region={region} changeRegion={changeRegion}></Screen2>}
      </div>
    </div>
  );
}

export default App;
