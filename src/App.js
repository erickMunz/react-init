import React from 'react';
import {Route} from 'react-router-dom';
import Login from './modulos/login/login';

const App = ()=>  (
      <div>
        <Route path="/" exact component ={Login}/>
        
      </div>
)

export default App;
