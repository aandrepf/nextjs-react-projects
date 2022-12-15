import { EventList } from "../components/events/EventList";
import { getFeaturedEvents } from "../helpers/api-utils";

export default function HomePage({ events }) {
  return (
    <div>
      <EventList events={events} />
    </div>
  );
}

// STATIC GENERATION
export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}
