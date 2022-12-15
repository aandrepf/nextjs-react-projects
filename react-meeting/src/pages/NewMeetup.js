import { useHistory } from "react-router-dom";
import { NewMeetupForm } from "../components/meetups/NewMeetupForm";

export function NewMeetupPage() {
  const history = useHistory();

  function handleAddMeetup(meetupData) {
    // *firebase folder precisa ser tipo .json file
    fetch(
      "https://react-getting-started-ce3fc-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      // *replace ele substitui o valor atual no array de useHistory para o valor no parametro
      history.replace("/");
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={handleAddMeetup} />
    </section>
  );
}
