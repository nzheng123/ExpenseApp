import { createStore } from 'redux';

// Action generators - functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({ count }) => ({
  type: 'SET',
  count
});

const resetCount = () => ({
  type: 'RESET'
});

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'SET':
      return {
        count: action.count
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
});

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }))

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: -102 }));

const book = {
      title: 'Ego is the Enemy',
      author: 'Ryan Holiday',
      publisher: {
            name: 'Penguin'
        }
      };
    
const {title,author}=book;
console.log("testing");
console.log(`book ${title} was written by ${author}`);
const {name:publisher='NA'}=book.publisher;
console.log(`book ${title} was written by ${author} was publiced by ${publisher}`);

const item = ['Coffee (iced)', '$3.00', '$3.50', '$3.75'];
const [item1, price]=item;
console.log(`${item1} is ${price}`);