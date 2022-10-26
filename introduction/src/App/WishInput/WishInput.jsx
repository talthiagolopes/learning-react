import React, { useState } from 'react';
import PropTypes from 'prop-types';

function WishInput({ onNewWish }) {
  const [newWishText, setNewWishText] = useState('');
  return (
    <fieldset className="wish-input">
      <legend className="wish-input__label">New wish</legend>
      <input
        className="wish-input__field"
        placeholder="Enteder your wish here"
        value={newWishText}
        onChange={(element) => setNewWishText(element.target.value)}
        onKeyUp={(element) => {
          if (element.key === 'Enter' && newWishText.length) {
            onNewWish({ text: newWishText, done: false });
            setNewWishText('');
          }
        }}
      />
    </fieldset>
  );
}

WishInput.propTypes = {
  onNewWish: PropTypes.func,
};

WishInput.defaultProps = {
  onNewWish: () => {},
};

export default WishInput;
