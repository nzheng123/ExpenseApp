import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_EXPENSE
// export const addExpense = (
//   {
//     description = '',
//     note = '',
//     amount = 0,
//     createdAt = 0
//   } = {}
// ) => ({
//   type: 'ADD_EXPENSE',
//   expense: {
//     id: uuid(),
//     description,
//     note,
//     amount,
//     createdAt
//   }
// });

// ADD_EXPENSE
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

//RETURN function
// export const startAddExpense = (expenseData = {}) => {
//   return (dispatch) => {
//     const {
//       description = '',
//       note = '',
//       amount = 0,
//       createdAt = 0
//     } = expenseData;
//     const expense = { description, note, amount, createdAt };

//     return database.ref('expenses').push(expense).then((ref) => {
//       dispatch(addExpense({
//         id: ref.key,
//         ...expense
//       }));
//     });
//   };
// };


//RETURN function
export const startAddExpense = (expenseData = {}) => async(dispatch,getState) => {
    try {
    const uid = getState().auth.uid;
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };
     const expData=await database.ref(`users/${uid}/expenses`).push(expense);
     const result=dispatch(addExpense({id:expData.key, ...expense}));
    return result;
  } catch (err) {
    console.log("test",err);
  }
  };




// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});


// SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
});

export const startSetExpenses = () => async(dispatch,getState) => {
  try {
    const uid = getState().auth.uid;
    const snapshot=await database.ref(`users/${uid}/expenses`).once('value');
    
    const expenses = [];
    snapshot.forEach((childSnapshot) => {
      console.log(`get item ${childSnapshot.key}`);
      expenses.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
      });
    
    dispatch(setExpenses(expenses));
    
    });  

  } catch (err) {
  console.log("error:",err);
}
};




export const startRemoveExpense = ({ id } = {}) => async(dispatch,getState) => {
  try{
    const uid = getState().auth.uid;
    const snapshot=await database.ref(`users/${uid}/expenses/${id}`).remove();
      return dispatch(removeExpense({ id }));
  } catch(error) {
    console.log("error:",err);
  }
  
    };


export const startEditExpense = (id, updates) => async(dispatch,getState) => {
  try{
        const uid = getState().auth.uid;
        const snapshot=await database.ref(`users/${uid}/expenses/${id}`).update(updates);
    return dispatch(editExpense(id,updates ));
    } catch(error) {
        console.log("error:",error);
    }
      
  };


// export const startEditExpense = (id, updates) => {
//     return (dispatch) => {
//       return database.ref(`expenses/${id}`).update(updates).then(() => {
//         dispatch(editExpense(id, updates));
//       });
//     };
//   };

  


 
 




// export const startRemoveExpense = ({ id } = {}) => {
//   return (dispatch) => {
//     return database.ref(`expenses/${id}`).remove().then(() => {
//       dispatch(removeExpense({ id }));
//     });
//   };
// };



// export const startSetExpenses = () => {
//   return (dispatch) => {
//     return database.ref('expenses').once('value').then((snapshot) => {
//       const expenses = [];

//       snapshot.forEach((childSnapshot) => {
//         expenses.push({
//           id: childSnapshot.key,
//           ...childSnapshot.val()
//         });
//       });

//       dispatch(setExpenses(expenses));
//     });
//   };
// };


