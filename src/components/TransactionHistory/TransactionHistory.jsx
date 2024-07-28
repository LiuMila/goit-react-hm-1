import PropTypes from 'prop-types'
import { TransactionElement } from './TransactionElement'
import { TableTransaction, TitleTable } from './TransactionHistory.styled'

export const TransactionHistory = ({ items }) => {
    return <TableTransaction>
  <thead>
    <tr>
      <TitleTable>Type</TitleTable>
      <TitleTable>Amount</TitleTable>
      <TitleTable>Currency</TitleTable>
    </tr>
  </thead>
        {items.map(({ id, type, amount, currency }) => {
            return <TransactionElement
                key={id}
                type={type}
                amount={amount}
                currency={currency}
            ></TransactionElement>
    })}
</TableTransaction>
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired
    }).isRequired).isRequired
}