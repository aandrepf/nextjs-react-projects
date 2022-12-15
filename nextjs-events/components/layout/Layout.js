import { MainHeader } from "./MainHeader";

export function Layout({ children }) {
  return (
    <>
      <MainHeader />
      <main>{children}</main>
    </>
  );
}
