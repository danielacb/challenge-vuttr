import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body,
  input,
  textarea,
  button  {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 1rem;
  }

  h1 {
    font-size: 2.625rem;
    line-height: 3.125rem;
    letter-spacing: 0.0525rem;
  }

  h2 {
    font-size: 2.25rem;
    line-height: 2.5rem;
    letter-spacing: 0.045rem;
  }

  h3 {
    font-size: 1.875rem;
    line-height: 2.25rem;
    letter-spacing: 0.0375rem;
  }

  h4 {
    font-size: 1.625rem;
    line-height: 2rem;
    letter-spacing: 0.0325rem;
  }

  p {
    font-size: 1.25rem;
    line-height: 1.625rem;
    letter-spacing: 0.025rem;
  }

  p.small {
    font-size: 1.125rem;
    line-height: 1.5rem;
    letter-spacing: 0.0225rem;
  }

  @media (max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}
`;

export default GlobalStyles;
