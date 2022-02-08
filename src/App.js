import { ThemeProvider, createGlobalStyle } from "styled-components";
import logo from "./logo.svg";
import StyledButton, {
  FancyButton,
  SubmitButton,
  DarkButton,
} from "./components/Button/Button";
import { AnimatedLogo } from "./components/Button/Button.style";

const theme = {
  dark: {
    primary: "#000",
    text: "#fff",
  },
  light: {
    primary: "#fff",
    text: "#000",
  },
  fontFamily: "Segoe UI",
};

const GlobalStyle = createGlobalStyle`
  button {
    ${"" /* font-family: 'Roboto'; */}
    font-family: ${(props) => props.theme.fontFamily}
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <AnimatedLogo src={logo} />
        <StyledButton type="submit">Styled Button</StyledButton>
        <div>
          <br />
        </div>
        <StyledButton variant="outline">Styled Button</StyledButton>
        <div>
          <br />
        </div>
        <FancyButton as="a">Fancy Button</FancyButton>
        {/* as - polymorphic prop */}
        <div>
          <br />
        </div>
        <SubmitButton>Submit</SubmitButton>
        <div>
          <br />
        </div>
        <DarkButton>Dark Button</DarkButton>
      </div>
    </ThemeProvider>
  );
}

export default App;
