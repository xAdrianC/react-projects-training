import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cv from './components/CV';
// import the library
import { library } from '@fortawesome/fontawesome-svg-core'

// import your icons
import { fas } from '@fortawesome/free-solid-svg-icons'


function App() {

  return (
    <div>
      <Cv />
    </div>
  );
}

export default App;
library.add(fas)