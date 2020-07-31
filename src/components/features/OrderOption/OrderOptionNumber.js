import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';



const OrderOptionNumber = ({currentValue, limits, setOptionValue}) => (
  <div className={styles.number} input type="number">
    <input
      className={styles.inputSmall}
      type='number'
      value={currentValue}
      min={limits.min}
      max={limits.max}
      onChange={event => setOptionValue(event.currentTarget.value)}
    />
  </div>
);

OrderOptionNumber.propTypes = {
  currentValue: PropTypes.func,
  limits: PropTypes.string,
  setOptionValue: PropTypes.func,
};

export default OrderOptionNumber;
