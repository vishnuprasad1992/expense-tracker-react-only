import React,{useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';


const Balance = () => {
	const {transactions} = useContext(GlobalContext);

	const amounts = transactions.map( transaction => transaction.amount);

	const totalAmount = amounts.reduce((total,item) => (total+=item),0);
	// console.log(totalAmount);
	return (
		<>
			<h4>Your Balance</h4>
			<h1 >Rs.{totalAmount}</h1>
		</>
	)
}

export default Balance;