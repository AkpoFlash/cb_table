import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';

import App from './components/App/App';

const GlobalStyle = createGlobalStyle`
	@font-face {
		font-family: GothamPro;
		src: url('/resources/fonts/GothamPro-Light.woff') format('woff');
		font-weight: normal;
  		font-style: normal;
		font-display: block;
	}

	@font-face {
		font-family: GothamPro;
		src: url('/resources/fonts/GothamPro.woff') format('woff');
		font-weight: bold;
  		font-style: normal;
		font-display: block;
	}

	body {
		margin: 0;
		padding: 0;
		font-family: GothamPro, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
			"Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	code {
		font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
	}
`;

ReactDOM.render(
	<>
		<App />
		<GlobalStyle />
	</>,
	document.getElementById('root')
);
