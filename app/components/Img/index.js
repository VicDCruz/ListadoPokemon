/**
 *
 * Img.js
 *
 * Renders an image, enforcing the usage of the alt="" tag
 */

import React from 'react';
import PropTypes from 'prop-types';

function Img(props) {
  return (
    props.href ? <a href={props.href}>
      <img
        className={props.className}
        src={props.src}
        alt={props.alt}
        height={props.height}
        width={props.width}
      />
    </a>
      : <img
        className={props.className}
        src={props.src}
        alt={props.alt}
        height={props.height}
        width={props.width}
      />
  );
}

// We require the use of src and alt, only enforced by react in dev mode
Img.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  href: PropTypes.string,
};

export default Img;
