import css from './TransactionHistory.module.css'
import PropTypes from 'prop-types';

export const TransactionHistory = ({items}) => {
    return (
        <table className={css.transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map(({id, type , amount, currency}) => (
        <tr key={id}>
        <td key={type}>{type}</td>
        <td key={amount}>{amount}</td>
        <td key={currency}>{currency}</td>
      </tr>
    ))}
  </tbody>
</table>
    )
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.string,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    })
)
}