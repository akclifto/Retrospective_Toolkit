import React from 'react'

const Emoji = props => (
  <div
    className='emoji'
    role='img'
    aria-label={props.label ? props.label : ''}
    aria-hidden={props.label ? 'false' : 'true'}
  >
    {props.symbol}
  </div>)

export default Emoji
