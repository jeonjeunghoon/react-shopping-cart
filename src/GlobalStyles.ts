import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle` 
  ${reset}
	* {
			box-sizing: border-box;
	}

  li {
    list-style: none;
  }

	body {
		width: 100%;
		height: 100%;

		font-family: 'Noto Sans KR';
  	font-style: normal;
		font-weight: 400;
  	letter-spacing: 0.5px;
  	color: #333333;
  } 

	#root {
		display: flex;
		justify-content: center;
		align-items: center;

		width: 100%;
		height: 100%;
	}

  a {
      text-decoration: none;
      color: inherit;
  }

  input, textarea { 
    -moz-user-select: auto;
    -webkit-user-select: auto;
    -ms-user-select: auto;
    user-select: auto;
  }

  input:focus {
    outline: none;
  }

  button {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
  }
`;

export default GlobalStyles;
