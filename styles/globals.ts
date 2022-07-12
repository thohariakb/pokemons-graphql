import { createGlobalStyle, css } from 'styled-components'


const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    //scrollbar configuration
    ::-webkit-scrollbar{
      width: 0.5rem;
    }
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }
    ::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 1rem;
    }
    ::-webkit-scrollbar-thumb:hover {
     background: #555;
    }
}
  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }
    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      background-color: ${theme.colors.lightBg};
      min-height: 100vh;
      height: 100vh;
      overflow-x: hidden;
    }
  `}
`
export default GlobalStyles