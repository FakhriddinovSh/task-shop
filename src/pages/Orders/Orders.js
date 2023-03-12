import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

export const Orders = ({ data }) => {
	// const [orders, setOrders] = useState([]);

	console.log(data);
	// useEffect(() => {
	// 	axios
	// 		.get('https://fakestoreapi.com/carts/userId/1')
	// 		.then((res) => setOrders(res.data))
	// 		.catch((err) => console.log(err));
	// }, []);

	return (
		<table>
			<thead>
				<tr>
					<th>NO_</th>
					<th>IMAGE</th>
					<th>NAME</th>
					<th>CATEGORY</th>
					<th>PRICE</th>
					<th>AMOUNT</th>
					<th>TOTAL PRICE</th>
					<th>REMOVE</th>
				</tr>
			</thead>
			<tbody>
				{/* <tr>
					<td>{data.name}</td>
					<td>{item.age}</td>
					<td>{item.city}</td>
				</tr> */}
			</tbody>
		</table>
	);
};
