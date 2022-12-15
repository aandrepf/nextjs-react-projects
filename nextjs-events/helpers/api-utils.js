export const FIREBASE_BASE_URL =
  "https://nextjs-course-f0994-default-rtdb.firebaseio.com";

export async function getAllEvents() {
  const response = await fetch(`${FIREBASE_BASE_URL}/events.json`);
  const data = await response.json();

  const events = [];

  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }

  return events;
}

/**
 * @returns A promise of all events that have been featured
 */
export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
}

/**
 * @returns A promise with the event by its identifier
 *@param id The id of the event
 */
export async function getEventById(id) {
  const allEvents = await getAllEvents();
  return allEvents.find((event) => event.id === id);
}

/**
 * @returns A promise of all events filtered by its year and month values.
 *@param dateFilter An object with year and month properties
 */
export async function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;
  const allEvents = await getAllEvents();

  let filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}
