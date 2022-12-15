import { EventItem } from "./EventItem";

import styles from "./EventList.module.css";

export function EventList({ events }) {
  return (
    <ul className={styles.list}>
      {events.map((event) => {
        return (
          <EventItem
            key={event.id}
            id={event.id}
            title={event.title}
            date={event.date}
            location={event.location}
            image={event.image}
          />
        );
      })}
    </ul>
  );
}
