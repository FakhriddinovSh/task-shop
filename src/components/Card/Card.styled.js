import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import CloseIcon from '../../assets/images/icons/cancel.png';

export const CardItem = styled.li`
	margin-bottom: 20px;
`;
export const CardWrapper = styled.div``;
export const CardSubWrapper = styled.div``;
export const CardImage = styled.img`
	width: 100%;
	height: 400px;
	object-fit: contain;
`;
export const CardTitle = styled.h5``;
export const CardDescription = styled.p`
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	display: -webkit-box;
	overflow: hidden;
`;

export const CardMoreInfo = styled(NavLink)``;
export const CardOrder = styled.button``;
export const CardPrice = styled.p``;
export const CardModalInner = styled.div`
	width: 500px;
	height: 400px;
	margin: 80px auto;
	padding: 30px;
	background-color: #fff;
	border-radius: 10px;
`;

export const CloseModal = styled.button`
	width: 30px;
	height: 30px;
	border-radius: 50px;
	float: right;
	background-image: url(${CloseIcon});
	background-repeat: no-repeat;
	background-size: cover;
`;
