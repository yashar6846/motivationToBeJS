import './App.css';
import { Weather } from './short codse/compoWeather/Weather';
import { Modale } from './short codse/component/modal/Modal';
import HookList from './short codse/shopCart/ CustomHook/HookList';
import { Available } from './short codse/shopCart/ CustomHook/available/Available';

function App() {
  return (
    <div className="App">
     {/* <Weather /> */}
     {/* <Modale /> */}
    {/* <Available />  */}
    <HookList />
    </div>
  
  );
}

export default App;
