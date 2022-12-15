import { useRouter } from "next/router";

export default function ClientsProjectsPage() {
  const router = useRouter();
  console.log(router.query);

  function handleLoadProject() {
    // * NAVIGATING PROGRAMATICALLY
    // router.push("/clients/max/projectA");
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: {
        id: "max",
        clientprojectid: "projectA",
      },
    });
  }

  return (
    <div>
      <h1>projects-clients-page works!</h1>
      <button onClick={handleLoadProject}>Load Project A</button>
    </div>
  );
}
