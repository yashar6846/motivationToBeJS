import React from 'react';
import {Route,Routes} from 'react-router-dom'
import { YazyDetay } from './components/YazyDetay';
import {YazyListese }from './components/YazyListese';

function App() { 
  return (
   <>
    <div className='mainWrapper'>
      <div className="ui raised very padded text container segment">
      <Routes>
      <Route exact path="/" element={<YazyListese/>}/>
      <Route exact path="/posts/:id" element={<YazyDetay/>}/>
      </Routes>
      </div>
      </div>
   </>
    )
}

export default App;
      
