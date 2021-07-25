import { Form } from "../components/Form/form";
import { Header } from "../components/Header/Header";

export function Home() {
  return (
    <>
      <Header />
      <main className='homeMain'>
        <Form/>
      </main>
    </>
  );
}