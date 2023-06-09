import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Lexend', sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
    background: transparent;
    border: none;
    transition: 0.3s;   
  }

  button:hover{
      opacity: 0.85;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }  

  input {
    border:none;
    outline:none;
  }
`;

export default GlobalStyle;
