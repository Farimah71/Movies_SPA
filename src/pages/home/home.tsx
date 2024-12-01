import { Header } from "../../components/layout/header";
import { Movies } from "./_components/movies";

const Home: React.FC = () => {
  // ********** JSX ***********
  return (
    <>
      <Header title="Latest movies" />
      <main>
        <section className="flex flex-col gap-y-5 items-center justify-between p-10 min-h-96">
          <Movies />
        </section>
      </main>
    </>
  );
};

export default Home;
