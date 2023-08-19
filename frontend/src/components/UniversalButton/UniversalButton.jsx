import React from 'react';
import PropTypes from 'prop-types';

export const UniversalButton = ({ color, background,  svg,  hoverBackground, hoverColor }) => {
  const buttonStyles = {
    text: 'Read more',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    width: '160px',
    height: '40px',
    backgroundColor: '#54adff',
    color: '#ffffff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    transition: 'all 0.5s ease',
  };

  const hoverStyles = {
    backgroundColor: '#cce4fb',
    color: '#111',
    transition: 'all 0.5s ease',
  };

  return (
    <button
      style={{ ...buttonStyles }}
      onMouseEnter={(e) => Object.assign(e.target.style, hoverStyles)}
      onMouseLeave={(e) => Object.assign(e.target.style, buttonStyles)}
    >
      {buttonStyles.text}{svg}
    </button>
  );
};

UniversalButton.propTypes = {
  color: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  hoverBackground: PropTypes.string.isRequired,
  hoverColor: PropTypes.string.isRequired,
};

export default UniversalButton;