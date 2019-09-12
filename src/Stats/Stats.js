import React from 'react';
import PropTypes from 'prop-types';
import styles from './Stats.module.css';
import getRandomColor from './randomColor';

const Stats = ({ title = '', stats = [] }) => {
  return (
    <section className={styles.statsSection}>
      {title !== '' ? <h2 className={styles.title}>{title}</h2> : null}
      <ul className={styles.statList}>
        {stats.map(item => (
          <li
            className={styles.statListItem}
            key={item.id}
            style={{ backgroundColor: getRandomColor() }}
          >
            <span className={styles.label}>{item.label}</span>
            <span className={styles.percentage}>{item.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Stats.defaultProps = {
  title: '',
};

Stats.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Stats;
