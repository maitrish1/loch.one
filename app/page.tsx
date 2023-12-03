import Image from "next/image";
import Main from "./Main";
import Email from "./Email";

export default function Home() {
  return (
    <main className="flex md:flex-row flex-col h-full">
      <Main />
      <Email />
    </main>
  );
}
