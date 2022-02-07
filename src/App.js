import StyledButton, { FancyButton } from "./components/Button/Button";

function App() {
  return (
    <div className="App">
      <StyledButton>Styled Button</StyledButton>
      <div>
        <br />
      </div>
      <StyledButton variant="outline">Styled Button</StyledButton>
      <div>
        <br />
      </div>
      <FancyButton as="a">Fancy Button</FancyButton>
      {/* as - polymorphic prop */}
    </div>
  );
}

export default App;
