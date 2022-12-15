import styles from "./ErrorAlert.module.css";

export function ErrorAlert({ children }) {
  return <div className={styles.alert}>{children}</div>;
}
