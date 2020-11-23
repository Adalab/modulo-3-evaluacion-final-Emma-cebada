import React from 'react';
import api from '../services/api';
import '../stylesheets/App.css';

api.getDataFromApi().then(data => {
  console.log(data);
});

const App = () => {
  return (
    <div className="App">

    </div>
  );
}

export default App;
