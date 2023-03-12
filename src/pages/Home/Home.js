import { useQuery } from 'react-query';
import { Card } from '../../components/Card/Card';
import { BASE_URL } from '../../data/API';
import { Modal } from '../../components/TypeModal/TypeModal';

import {
	Container,
	Header,
	HeaderButton,
	HeaderWrapper,
	LogoLink,
	MainSection,
	ProductList,
} from './Home.styled';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const Home = () => {
	const [orderModal, setOrderModal] = useState(false);
	const { isLoading, error, data } = useQuery('todos', () =>
		fetch(`https://fakestoreapi.com/products`).then((res) => res.json()),
	);
	const [orders, setOrders] = useState([]);
	const [products, setProducts] = useState([]);

	useEffect(() => {
		axios
			.get('https://fakestoreapi.com/carts')
			.then((res) => setOrders(res.data))
			.catch((err) => console.log(err));
	}, []);

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error: {error.message}</div>;

	return (
		<>
			<Header>
				<Container>
					<HeaderWrapper>
						<LogoLink to="/">BigTech</LogoLink>
						<HeaderButton
							onClick={() => setOrderModal(true)}
						></HeaderButton>
					</HeaderWrapper>
				</Container>
			</Header>
			<MainSection>
				<Container>
					<ProductList className="row">
						{data.map((item) => (
							<Card
								key={item.id}
								orderProductId={item.id}
								productId={item.id}
								productName={item.title}
								productImage={item.image}
								productDescription={item.description}
								productRating={item.rating}
								productPrice={item.price}
							/>
						))}
					</ProductList>
				</Container>

				<Modal modal={orderModal} setModal={setOrderModal}>
					<div
						className="p-4"
						style={{
							width: '400px',
							height: '100vh',
							background: '#fff',
							float: 'right',
						}}
					>
						<button
							onClick={() => setOrderModal(false)}
							className="btn btn-danger float-end"
						>
							close
						</button>
						<h3 className="text-center">Orders</h3>
						<ul>
							{orders.map((item) =>
								console.log(item.products[0]),
							)}
						</ul>
					</div>
				</Modal>
			</MainSection>
		</>
	);
};
