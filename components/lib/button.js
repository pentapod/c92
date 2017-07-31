import {css} from 'glamor';

function button(color) {
  return {
    display: 'inline-block',
    textAlign: 'center',
    verticalAlign: 'top',
    position: 'relative',
    padding: '.6em 1.2em',
    cursor: 'pointer',
    lineHeight: 1.5,
    fontSize: '90%',
    borderRadius: '.25em',
    overflow: 'hidden',
    color: color,
    backgroundColor: 'transparent',
    textDecoration: 'none',
    border: `1px solid ${color}`,
    transitionProperty: 'background-color, color',
    transitionDuration: '.2s',
    ':hover': {
      backgroundColor: color,
      color: '#fff',
      textDecoration: 'none',
      borderColor: color,
    }
  };
}

function buttonInverse(color, hoverColor) {
  return Object.assign({}, button(color), {
    color: '#fff',
    backgroundColor: color,
    ':hover': {
      backgroundColor: hoverColor,
      color: '#fff',
      textDecoration: 'none',
      borderColor: hoverColor,
    },
  });
}

export default {
  small: (color) => css(Object.assign({}, button(color), {
    padding: '.3em .8em',
  })),
  normal: (color) => css(button(color)),
  large: (color) => css(Object.assign({}, button(color), {
    padding: '.7em 2em',
    fontSize: '120%',
    boxSizing: 'border-box',
    borderWidth: '2px',
  })),
  inverse: (color, hoverColor) => css(buttonInverse(color, hoverColor)),
}
