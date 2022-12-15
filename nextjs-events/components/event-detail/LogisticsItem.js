import styles from "./LogisticsItem.module.css";

export function LogisticsItem({ icon: Icon, children }) {
  return (
    <li className={styles.item}>
      <span className={styles.icon}>
        <Icon />
      </span>
      <span className={styles.content}>{children}</span>
    </li>
  );
}
