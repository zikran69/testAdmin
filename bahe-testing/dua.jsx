// 👇️ import PropTypes
import PropTypes from "prop-types";

function App() {
  return (
    <div>
      <h2>bobbyhadz.com</h2>

      <Button>Click</Button>
    </div>
  );
}

function Button({ children }) {
  return <button>{children}</button>;
}

// 👇️ define prop types for the component
// button dari >> funtion Button({children})
Button.propTypes = {
  children: PropTypes.node,
};

export default App;
