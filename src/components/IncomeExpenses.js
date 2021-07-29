import React,{useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

const IncomeExpenses = () => {

	const {transactions} = useContext(GlobalContext);
	const amounts = transactions.map( transaction => transaction.amount);

	const income = amounts.filter( amount => amount >0);
	const incomeAmount= income.reduce((income,item) => (income+=item),0);

	const expense = amounts.filter( amount => amount <0);
	const expenseAmount= expense.reduce((expense,item) => (expense+=item),0) *-1;
	// const expense = (amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *-1);

	return (
		<div className="inc-exp-container">
			<div>
				<h4>Income</h4>
				<p className="money plus">+Rs.{incomeAmount}</p>
			</div>
			<div>
				<h4>Expense</h4>
				<p className="money minus">-Rs.{expenseAmount}</p>
			</div>
      </div>
	)
}

export default IncomeExpenses;