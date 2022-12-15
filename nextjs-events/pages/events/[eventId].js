import { getEventById, getFeaturedEvents } from "./../../helpers/api-utils";

import { EventSummary } from "../../components/event-detail/EventSummary";
import { EventLogistics } from "../../components/event-detail/EventLogistics";
import { EventContent } from "../../components/event-detail/EventContent";
import { ErrorAlert } from "../../components/ui/ErrorAlert";

export default function EventDetailPage({ selectedEvent }) {
  const event = selectedEvent;

  if (!event) {
    return (
      <>
        <div class="center">
          <p>Loading...</p>
        </div>
      </>
    );
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
}

export async function getStaticProps(context) {
  const eventId = context.params.eventId;

  const event = await getEventById(eventId);

  if (!event) {
    return { notFound: true };
  }

  return {
    props: {
      selectedEvent: event,
    },
    revalidate: 30,
  };
}

// * Quais os eventId devem pre-renderizar essa page
export async function getStaticPaths() {
  const events = await getFeaturedEvents();

  const paths = events.map((event) => ({
    params: { eventId: event.id },
  }));

  // * fallback false, dizemos que expecificamos todas as
  // * paginas no paths e, qualquer outro id leva para uma pagina 404
  // * true = dizemos que há mais paginas do que as em paths
  // * blocking = o next não vai servir nada equanto náo terminar de gerar a pagina
  return {
    paths: paths,
    fallback: "blocking",
  };
}
