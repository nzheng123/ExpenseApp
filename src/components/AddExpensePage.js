// import React from 'react';
// import ExpenseForm from './ExpenseForm';
// import { connect } from 'react-redux';
// import { addExpense } from '../actions/expenses';

// const AddExpensePage = (props) => (
//     <div>
//     <h1>Add Expense</h1>
//     <ExpenseForm onSubmit={(expense) => {
//       console.log("got Submit ...")
//       props.dispatch(addExpense(expense));
//       props.history.push('/');
//     }}
//     />
//     </div>
//   );
  
//   export default connect()(AddExpensePage);


import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';
import 'babel-polyfill';


export class AddExpensePage extends React.Component {
  onSubmit = async(expense) => {
    await this.props.startAddExpense(expense);
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   startAddExpense: (expense) => dispatch(startAddExpense(expense))
// });

// export default connect(undefined, mapDispatchToProps)(AddExpensePage);

export default connect(undefined, {startAddExpense} )(AddExpensePage);