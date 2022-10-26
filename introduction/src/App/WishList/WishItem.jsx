import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function WishItem({
  done, text, id, onDoneChange,
}) {
  const [age, setAge] = useState(0);

  useEffect(() => {
    let ageInterval;
    if (done) {
      setAge(0);
    } else {
      ageInterval = setInterval(() => {
        if (done) {
          clearInterval(ageInterval);
        } else {
          setAge((a) => a + 1);
        }
      }, 1000);
    }
    return () => clearInterval(ageInterval);
  }, [done]);

  return (
    <li
      className={classNames('wish-list__item', {
        'wish-list__item--done': done,
        'wish-list__item--warning': age >= 3 && age < 7,
        'wish-list__item--danger': age >= 7,
      })}
    >
      <input
        id={id}
        type="checkbox"
        checked={!!done}
        onChange={(e) => onDoneChange(e.target.checked)}
      />
      <label htmlFor={id}>{text}</label>
    </li>
  );
}

WishItem.propTypes = {
  done: PropTypes.bool,
  text: PropTypes.string,
  id: PropTypes.string,
  onDoneChange: PropTypes.func,
};
WishItem.defaultProps = {
  done: false,
  text: '',
  id: '',
  onDoneChange: () => {},
};

export default WishItem;
