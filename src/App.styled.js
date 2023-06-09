import styled from 'styled-components';

export const GlobalStyles = styled.div`
	/* GENERAL */
	* {
		box-sizing: border-box;
	}

	*::before,
	*::after {
		box-sizing: inherit;
	}

	html {
		height: 100%;
		box-sizing: border-box;
	}

	img {
		display: block;
		height: auto;
	}

	body {
		display: flex;
		flex-direction: column;
		height: 100%;
		margin: 0;
		padding: 0;
		/* font-family: "Roboto", "Arial", sans-serif; */
		/* font-size: 16px; */
		/* font-weight: 400; */
		/* line-height: var(--main-line-height); */
	}

	/* STICKY-FOOTER */
	.site-main {
		flex-grow: 1;
	}

	.hero-title {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`;
