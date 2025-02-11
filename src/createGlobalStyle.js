const { createGlobalStyle } = require("styled-components");

const GlobalStyle = createGlobalStyle`
  /* 기본 폰트 (영어, 숫자) */
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200..800&display=swap');
  
  /* 한글 폰트 */
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Plus Jakarta Sans","Noto Sans KR";
  background-color: #fff;
  color: #333;
  font-size: 1.2rem;

  @media screen and (max-width: 1440px){
    font-size: 1rem;
  }
}


a {
  text-decoration: none;
  color: inherit;
}

img {
  display: block;
  max-width: fit-content;
}

ul,
li {
  list-style: none;
}

button {
  display: block;
  padding: 0;
  border: none;
  border-radius: 1rem;
  background-color: transparent;
  cursor: pointer;
}


`;

export default GlobalStyle;
