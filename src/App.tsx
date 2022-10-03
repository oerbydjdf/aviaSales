import React, { useEffect, useReducer,} from 'react';
import FlightData from './components/flightData/FlightData';
import Logo from './components/logo/Logo';
import Navigation from './components/navigation/Navigation';
import Parametrs from './components/parametrs/Parametrs';
import {api} from './api/apiTicket';
import {useSortTicketsParam} from './hooks/UseSortTicket';
import { observer } from 'mobx-react-lite';
import store from './store/store';
import AddButtom from './components/buttom/AddButtom';

function App() {
  useEffect(() => {
    (async () => {
      let arr = await api.getArrTickets();
      store.getBandlTicket(arr);
    })();
  }, [store.bandl.arrTicket]);
  

  
  return (
    <div style={{backgroundColor:'rgba(229, 229, 229, 1)', padding: '35px  103px 50px', minHeight: '100vh'}}
    className="App">
      
      <Logo/>
      <div style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'flex-start',}}>
        <Parametrs/>
        <div>
        <Navigation/>
        <FlightData state={store.bandl} sortTickets={store.arrSortTickets} addElem={store.numElem}/>
        <AddButtom condition={store.bandl.bandlStop}/>
        </div>
      </div>
    </div>
  );
}

export default observer(App);
