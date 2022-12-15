import Link from "next/link";

export default function ClientsPage() {
  const clients = [
    { id: "max", name: "Maxmilian" },
    { id: "manuel", name: "Manuel" },
  ];

  return (
    <div>
      <h1>clients-page works!</h1>
      <ul>
        {clients.map((client) => {
          /*return (
            <li key={client.id}>
              <Link href={`/clients/${client.id}`}>{client.name}</Link>
            </li>
          );*/
          return (
            <li key={client.id}>
              <Link
                href={{
                  pathname: "/clients/[id]",
                  query: { id: client.id },
                }}
              >
                {client.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
