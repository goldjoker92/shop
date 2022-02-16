import React from 'react';
import PhoneContainer from './Components/PhoneContainer';
import TvContainer from './Components/TvContainer';
import { Provider } from 'react-redux';
import store from './redux/Store';

function App() {
  return (
    <Provider store = {store}>
      <div className="section-one">
        <PhoneContainer /> {/*props pour l'autre methode warning="Epuisement du stock*/}
        <TvContainer /> 
      </div>
    </Provider>
  );
}

export default App;