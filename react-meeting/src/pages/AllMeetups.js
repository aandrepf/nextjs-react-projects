import { useState, useEffect } from "react";

import { MeetupList } from "../components/meetups/MeetupList";

export function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  // * useEffect = permite executar algum código perante algumas condições
  // * O primeiro parametro é a função que executa alguma lógica dentro
  // * O segundo parametro é um array de dependencias.
  /*
   * Sem o segundo parametro ele sempre vai executar a lógica toda vex que o componente
   * renderizar (ISSO É RUIM!!!)
   * Com o array vazio ele executa 1 unica vez a lógica, pois não há dependencias dentro
   */
  useEffect(() => {
    setIsLoading(true);

    fetch(
      "https://react-getting-started-ce3fc-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key], // *spread para distribuir o objeto dentro desse objeto
          };

          meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}
