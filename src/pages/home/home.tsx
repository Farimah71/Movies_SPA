import { Header } from "../../components/layout/header";
import { Movies } from "./_components/movies";

const Home: React.FC = () => {
  // ********** States ***********

  // ********** Hooks ***********

  // ********** Functions ***********

  // ********** JSX ***********
  return (
    <>
      <Header title="Trending movies" />
      <main>
        <section className="flex flex-col gap-y-5 items-center justify-between p-10 min-h-96">
          <Movies />
        </section>
      </main>
    </>
  );
};

export default Home;
