import axios from 'axios';
import { useState } from 'react';
import { BASE_URL } from '../../data/API';
import { Home } from '../../pages/Home/Home';
import { Modal } from '../TypeModal/TypeModal';
import {
	CardDescription,
	CardImage,
	CardItem,
	CardModalInner,
	CardMoreInfo,
	CardOrder,
	CardPrice,
	CardSubWrapper,
	CardTitle,
	CardWrapper,
	CloseModal,
} from './Card.styled';

export const Card = ({
	productId,
	productImage,
	productName,
	productPrice,
	productDescription,
	productRating,
	orderProductId,
}) => {
	const [orderModal, setOrderModal] = useState(false);
	const [orderInfo, setOrderInfo] = useState();
	const [count, setCount] = useState(1);

	const getSingle = (id) => {
		axios
			.get('https://fakestoreapi.com/products/' + id)
			.then((data) => setOrderInfo(data.data));
	};

	function incrementCount() {
		setCount(count + 1);
	}

	function decrementCount() {
		if (count >= 2) {
			setCount(count - 1);
		}
	}

	const postOrderFn = () => {
		const date = new Date();
		const year = date.getFullYear();
		const month = date.getMonth();
		const dateNow = date.getDate();

		axios
			.post('https://fakestoreapi.com/carts', {
				userId: 45,
				date: `${year}-${month}-${dateNow}`,
				products: [{ productId: orderInfo.id, quantity: count }],
			})
			.then((res) => {
				if (res.status === 200) {
					setOrderModal(false);
					alert('Product sucessfully added');
				} else {
					alert('Product not added !!!');
				}
			})
			.catch((err) => console.log(err));
	};

	return (
		<>
			<CardItem className="col-12 col-md-4">
				<CardWrapper className="card mb-3">
					<CardImage
						src={productImage}
						className="card-img-top img-fluid"
						alt={productName}
					/>
					<CardSubWrapper className="card-body">
						<div className="mb-3" style={{ height: '80px' }}>
							<CardTitle className="card-title">
								{productName}
							</CardTitle>
						</div>
						<CardDescription className="card-text">
							{productDescription}
						</CardDescription>
						<CardPrice className="text-danger fs-5">
							${productPrice}
						</CardPrice>
						<CardSubWrapper className="d-flex align-items-center justify-content-between">
							<CardMoreInfo to={`/${productId}`}>
								More Info
							</CardMoreInfo>
							<CardOrder
								onClick={() => {
									setOrderModal(true);
									getSingle(orderProductId);
									postOrderFn(orderProductId);
								}}
								className="btn btn-success w-50"
							>
								Buy
							</CardOrder>
						</CardSubWrapper>
					</CardSubWrapper>
				</CardWrapper>
			</CardItem>

			<Modal modal={orderModal} setModal={setOrderModal}>
				<CardModalInner>
					<CloseModal
						onClick={() => setOrderModal(false)}
						className="btn btn-danger"
					></CloseModal>
					<h3>{orderInfo?.title}</h3>
					<div className="mt-5">
						<button
							onClick={decrementCount}
							className="btn btn-danger w-25 d-inline-block"
						>
							-
						</button>
						<span className="btn btn-light w-50">{count}</span>
						<button
							onClick={incrementCount}
							className="btn btn-success w-25 d-inline-block"
						>
							+
						</button>
					</div>
					<span></span>
					<button
						onClick={() => postOrderFn()}
						className="btn btn-success w-100 mt-3"
					>
						Buy
					</button>
				</CardModalInner>
			</Modal>
		</>
	);
};
