import React from "react";
import PropTypes from "prop-types";

const Emoji = (props) => {
  const { label, symbol } = props;
  return (
    <div
      className="emoji"
      role="img"
      aria-label={label || ""}
      aria-hidden={label ? "false" : "true"}
    >
      {symbol}
    </div>
  );
};

Emoji.propTypes = {
  label: PropTypes.string.isRequired,
  symbol: PropTypes.symbol.isRequired,
};

export default Emoji;
