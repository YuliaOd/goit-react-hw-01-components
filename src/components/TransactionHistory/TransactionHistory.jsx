import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return <table className={css.transaction__history}>
  <thead>
    <tr className={css.contents__header}>
      <th className={css.contents}>Type</th>
      <th className={css.contents}>Amount</th>
      <th className={css.contents}>Currency</th>
    </tr>
  </thead>

  <tbody>{items.map(item => (<tr key={item.id} className={css.contents__row}>
      <td className={css.contents}>{item.type}</td>
      <td className={css.contents}>{item.amount}</td>
      <td className={css.contents}>{item.currency}</td>
    </tr>))}
  </tbody>
</table>
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }))
}
