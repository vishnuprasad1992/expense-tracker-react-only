import { useContext,useState } from 'react'
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
	const [text, setText] = useState('');
	const [amount, setAmount] = useState('');

	const {addTransaction} = useContext(GlobalContext);

	const onSubmit = (e)=>{
		e.preventDefault();

		const newTransaction = {
			id: Math.floor(Math.random()*100000),
			text,
			amount: +amount
		}
		addTransaction(newTransaction);

	}

	return (
		<div>
			<h3>Add new transaction</h3>
			<form onSubmit={onSubmit}>
				<div className="form-control">
					<label htmlFor="text">Text</label>
					<input 
							type="text"
							onChange={(e) => setText(e.target.value)} 
							placeholder="Enter text..."
							value={text}
					/>
				</div>
				<div className="form-control">
					<label htmlFor="amount"
					>Amount <br />
					(negative - expense, positive - income)</label
					>
					<input 
							type="number"
							placeholder="Enter amount..."
							onChange={(e) => setAmount(e.target.value)} 
							value={amount}
					/>
				</div>
				<button className="btn">Add transaction</button>
			</form>
		</div>
	)
}

export default AddTransaction;