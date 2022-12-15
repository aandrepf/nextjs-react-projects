import styles from "./MeetupList.module.css";
import { MeetupItem } from "./MeetupsItem";

export function MeetupList({ meetups }) {
  return (
    <ul className={styles.list}>
      {meetups.map((meetup) => {
        return (
          <MeetupItem
            key={meetup.id}
            id={meetup.id}
            image={meetup.image}
            title={meetup.title}
            address={meetup.address}
            description={meetup.description}
          />
        );
      })}
    </ul>
  );
}
