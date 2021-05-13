import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
	:root {
		--background: #fafafa;

		--white: #fff;
		--black: #000;

		--gray-400: #ababab;
		--gray-550: #868686;
		--gray-750: #545454;

		--green-500: #4F9419;
		--green-600: #006C18;
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html {
		@media (max-width: 1080px) {
			font-size: 93.75%;
		}

		@media (max-width: 720px) {
			font-size: 87.5%;
		}
	}

	body {
		font-size: 1rem;
		background: var(--background);
		-webkit-font-smoothing: antialiased;
	}

	body, input, button {
		font-family: 'Roboto', sans-serif;
		font-weight: 400;
	}

	h1, h2, h3, h4, h5, h6 {
		font-weight: 700;
	}

	button {
		cursor: pointer;
	}
`