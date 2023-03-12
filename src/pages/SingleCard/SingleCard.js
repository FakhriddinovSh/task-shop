import { Container } from '../Home/Home.styled';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { BASE_URL } from '../../data/API';
import {
	SingleCardBack,
	SingleCardImage,
	SingleCardInnerWrapper,
	SingleCardTitle,
	SingleCardWrapper,
} from './SingleCard.styled';

export const SingleCard = () => {
	const location = useParams();
	const navigate = useNavigate();

	const { isLoading, error, data } = useQuery('todos', () =>
		fetch(`${BASE_URL}/products/${location.id}`).then((res) => res.json()),
	);

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error: {error.message}</div>;

	return (
		<SingleCardWrapper>
			<Container>
				<SingleCardBack
					className="fw-bold fs-4"
					onClick={() => {
						navigate('/');
						window.location.reload();
					}}
				>
					🔙 Back
				</SingleCardBack>
				<SingleCardInnerWrapper>
					<SingleCardImage
						src={data?.image}
						width="300"
						height={400}
						alt={data?.title}
					/>
					<div className="pt-5">
						<SingleCardTitle className="mb-3">
							{data?.title}
						</SingleCardTitle>
						<p className="fw-bold m-0 mb-3">
							Description:
							<span className="fw-normal ms-3">
								{data?.description}
							</span>
						</p>
						<p className="fw-bold m-0 mb-3">
							Category:
							<span className="fw-normal ms-3">
								{data?.category}
							</span>
						</p>
						<p className="fw-bold m-0 mb-3">
							Price:
							<span className="fw-normal ms-3">
								{data?.price}
							</span>
						</p>
						<p className="fw-bold m-0 mb-3">
							Rate:
							<span className="fw-normal ms-3">
								{data?.rating?.rate}
							</span>
						</p>
						<p className="fw-bold m-0 mb-3">
							Count:
							<span className="fw-normal ms-3">
								{data?.rating?.count}
							</span>
						</p>
					</div>
				</SingleCardInnerWrapper>
			</Container>
		</SingleCardWrapper>
	);
};
