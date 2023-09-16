import PropTypes from "prop-types";

function MyComponent() {}

MyComponent.propTypes = {
  // You can declare that a prop is a specific JS primitive.
  // By default, these are all optional.
  optionalArray: PropTypes.array,
  optionalBigInt: PropTypes.bigint,
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalNumber: PropTypes.number,
  optionalObject: PropTypes.object,
  optionalString: PropTypes.string,
  optionalSymbol: PropTypes.symbol,
};
