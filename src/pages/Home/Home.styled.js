import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import cartIcon from '../../assets/images/icons8-shopping-cart-64.png';

export const Header = styled.header`
	position: fixed;
	z-index: 1;
	width: 100%;
	padding: 25px 0;
	background-color: #fff;
	box-shadow: 0 1px 10px 1px #000;
`;
export const Container = styled.div`
	width: 100%;
	max-width: 1340px;
	margin: 0 auto;
	padding: 0 20px;
`;
export const HeaderWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const LogoLink = styled(NavLink)`
	color: #000;
	font-size: 36px;
	font-weight: 700;
	text-decoration: none;
`;
export const HeaderButton = styled.button`
	width: 50px;
	height: 50px;
	background-color: transparent;
	border-color: transparent;
	background-image: url(${cartIcon});
	background-repeat: no-repeat;
	background-size: cover;
`;

export const MainSection = styled.main`
	padding-top: 150px;
`;
export const ProductList = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
`;
