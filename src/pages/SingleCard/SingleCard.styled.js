import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import backIcon from '../../assets/images/icons/left-arrow.png';

export const SingleCardWrapper = styled.div`
	padding-top: 100px;
`;

export const SingleCardInnerWrapper = styled.div`
	display: flex;
	margin-top: 50px;
`;

export const SingleCardImage = styled.img`
	margin-right: 100px;
`;
export const SingleCardBack = styled.button`
	position: relative;
	background-color: transparent;
	border: transparent;
`;
export const SingleCardTitle = styled.h3``;
export const SingleCardDescription = styled.p``;
