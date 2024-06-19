import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ transactions }) {
  return (
    <div className={css.transactionContainer}>
      <table className={css.tableBox}>
        <thead className={css.thead}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

			<tbody className={css.tbody}>
          {transactions.map(({ id, type, amount, currency }) => (
            <tr key={id} className={css.trBox}>
              <td className={css.smallBlocks}>{type}</td>
              <td className={css.smallBlocks}>{amount}</td>
              <td className={css.smallBlocks}>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}