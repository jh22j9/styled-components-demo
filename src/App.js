import logo from "./logo.svg";
import StyledButton, {
  FancyButton,
  SubmitButton,
} from "./components/Button/Button";
import { AnimatedLogo } from "./components/Button/Button.style";

function App() {
  return (
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
    </div>
  );
}

export default App;
