import styles from "src/components/Headline/Headline.module.css";

export const Headline = (props) => {
  return (
    <div>
      <h1 className={styles.title}>{props.page} page</h1>

      <p className={styles.description}>item count {props.children} 個</p>

      <button onClick={props.handleReduce}>Linkの削除</button>
    </div>
  );
};
