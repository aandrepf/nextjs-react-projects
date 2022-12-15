import classes from "./EventContent.module.css";

export function EventContent({ children }) {
  return <section className={classes.content}>{children}</section>;
}
