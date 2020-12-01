import React from 'react';
import PropTypes from 'prop-types';

const Emoji = props => (
    <div
        className="emoji"
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
    >
        {props.symbol}
    </div>);

    Emoji.propTypes = {
        label: PropTypes.string,
        symbol: PropTypes.symbol
    }
    
    export default Emoji;