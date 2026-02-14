import { Header } from "./components/Header";
import { Status } from "./components/Status";
import { Languages } from "./components/Languages";
import { Word } from "./components/Word";
import { Keyboard } from "./components/Keyboard";

export default function Home() {
  return (
    <>
      <Header />
      <Status />
      <Languages />
      <Word />
      <Keyboard />
    </>
  );
}
