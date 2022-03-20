import './App.css';
import React from 'react';
import Formulary from './components/formularylog';
import Datos from './components/infoapi';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Cuenta from './pages/Cuenta';

function App() {
  return (
    <div>
      <Formulary/>
      <Datos/>

      <div>
      <Router>
        <main>
          <Routes>
            <Route exact patch="/cuenta" component={Cuenta}></Route>
          </Routes>
        </main>
      </Router>
      </div>
    </div>
  );
}


export default App;
