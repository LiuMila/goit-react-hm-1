import { TableElement, TextTable} from "./TransactionElement.styled"

// eslint-disable-next-line react/prop-types
export const TransactionElement = ({ type, amount, currency }) => {
  return (
  <TableElement>
    <TextTable>{type}</TextTable>
    <TextTable>{amount}</TextTable>
    <TextTable>{currency}</TextTable>
  </TableElement>
  )
};