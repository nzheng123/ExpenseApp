import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './Routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense,startSetExpenses } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';
//import './playGround/promises';
import 'babel-polyfill';


const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

//ReactDOM.render(jsx, document.getElementById('app'));

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

 
const aa1=async ()=> {
 const bb=await  store.dispatch(startSetExpenses());
  ReactDOM.render(jsx, document.getElementById('app'));

};
aa1();

// store.dispatch(startSetExpenses()).then(() => {
//   ReactDOM.render(jsx, document.getElementById('app'));
// });