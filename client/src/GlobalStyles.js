import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

:root {
    --color-black: #444444;
    --color-white:#ffffff;
    --color-light-gray: #ebebeb;
    --color-green: #084d2c;
    --color-red: #ff501c;
    --color-blue: #153eff;
    --border-color:#444444;
    --border-radius: 5px;
    --box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body{
    max-width: 768px;
    height: 100vh;
    margin: 0 auto;
    padding: 0;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
    color: var(--color-green);
    background-color: var(--color-light-gray);
    text-align: center;
}

h1{
    margin: 1rem;
    font-style: italic;
    font-size: 1.5em;
}

input, label, textarea{
    font-size: 1em;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0 auto;
}
`;
