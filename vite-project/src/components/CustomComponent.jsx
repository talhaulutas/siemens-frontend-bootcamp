import React from 'react';
import propTypes from 'prop-types';

function CustomComponent({text,maxCount}) {
  return (
    <>
        {text.length > maxCount ? text.substring(0,maxCount)+ '...' : text}
    </>
  )
}
CustomComponent.propTypes = {
    text:propTypes.string.isRequired,
    maxCount:propTypes.number,
}
CustomComponent.defaultProps = {
    maxCount:100,
}

export default CustomComponent