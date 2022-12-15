import { getAllEvents } from "./../../helpers/api-utils";
import { useRouter } from "next/router";

import { EventList } from "../../components/events/EventList";
import { EventsSearch } from "../../components/events/EventsSearch";

export default function EventsPage({ events }) {
  const router = useRouter();

  function handleFindEvents(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <>
      <EventsSearch onSearch={handleFindEvents} />
      <EventList events={events} />
    </>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      events: events,
    },
    revalidate: 60, // a cada minuto quando uma request rodar revalidamos a pagina
  };
}
