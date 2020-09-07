import React from 'react';
// import PropTypes from 'prop-types';
import styles from './DaysToSummer.scss';

class DaysToSummer extends React.Component {
  getCountdownTimeToSummer() {
    const currentTime = new Date();
    const nextSummer = new Date(Date.UTC(currentTime.getUTCFullYear(), 5, 21, currentTime.getUTCHours(), currentTime.getUTCMinutes(), currentTime.getUTCSeconds(), currentTime.getUTCMilliseconds()));
    const endOfSummer = new Date(Date.UTC(currentTime.getUTCFullYear(), 8, 23, currentTime.getUTCHours(), currentTime.getUTCMinutes(), currentTime.getUTCSeconds(), currentTime.getUTCMilliseconds()));

    if (currentTime.getTime() > endOfSummer.getTime()) {
      nextSummer.setYear(currentTime.getUTCFullYear() + 1);
      const result = Math.round((nextSummer.getTime() - currentTime.getTime()) / (1000 * 60 * 60 *24));

      return `${result} days to summer`;

    } else if (currentTime.getTime() < nextSummer.getTime()) {
      const result = Math.round((nextSummer.getTime() - currentTime.getTime()) / (1000 * 60 * 60 * 24));

      return result > 1
        ? `${result} days to summer`
        : `${result} day to summer`;

    } else {
      return '';
    }
  }


  render() {
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>Test position for DaysToSummer{this.getCountdownTimeToSummer()}</h3>
      </div>
    );
  }
}

// DaysToSummer.propTypes = {
//   title: PropTypes.string,
//   promoDescription: PropTypes.string,
// };


export default DaysToSummer;
