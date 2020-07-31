import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';



const OrderOptionText = ({currentValue, setOptionValue}) => (
  <div className={styles.number} input type="text">
    <input
      className={styles.input}
      value={currentValue}
      onChange={event => setOptionValue(event.currentTarget.value)}
    />
  </div>
);

OrderOptionText.propTypes = {
  currentValue: PropTypes.func,
  setOptionValue: PropTypes.func,
};

export default OrderOptionText;
