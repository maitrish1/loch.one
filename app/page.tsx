import Image from "next/image";
import Main from "./Main";
import Email from "./Email";

export default function Home() {
  return (
    <main className="flex h-screen overflow-hidden">
      <div className="w-full overflow-y-auto">
        <Main />
      </div>
      <div className="w-64 h-screen fixed right-0 top-0">
        <Email />
      </div>
    </main>
  );
}
