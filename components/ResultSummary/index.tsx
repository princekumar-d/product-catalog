import styles from "./style.module.css";

type ResultSummaryProps = {
  resultCount: number;
};
export const ResultSummary: React.FC<ResultSummaryProps> = ({
  resultCount,
}: ResultSummaryProps) => {
  return (
    <div className={styles.resultSummary}>
      <h1>Products</h1>
      <p className={styles.count}>Showing {resultCount} items</p>
    </div>
  );
};
