import { Outlet } from "react-router-dom";
import { Footer } from "../components/layout/footer";
import Teaser from "../assets/Teaser/once-upon-a-time.jpg";
import Teaser2 from "../assets/Teaser/avatar.jpg";
import Teaser3 from "../assets/Teaser/once-more.jpg";
import Teaser5 from "../assets/Teaser/image.jpg";

const MainLayout: React.FC = () => {
  // ********** JSX ***********
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div>
        <h1 className="text-purple-200 text-center mt-20 px-3 font-black text-3xl md:text-4xl">
          Lights, Camera, Action: Dive into the World of Movies
        </h1>

        {/* Teaser Section::start */}
        <div className="flex my-14 justify-center">
          <img src={Teaser} width={"25%"} loading="lazy" className="aspect-square" alt="Poster" />
          <img src={Teaser2} width={"25%"} loading="lazy" className="aspect-square" alt="Poster" />
          <img src={Teaser3} width={"25%"} loading="lazy" className="aspect-square" alt="Poster" />
          <img src={Teaser5} width={"25%"} loading="lazy" className="aspect-square" alt="Poster" />
        </div>
        {/* Teaser Section::end */}

        <div className="lg:w-[calc(100%-10%)] md:w-[80%] w-full border-2 mx-auto border-blue-400 rounded-lg backdrop-blur-md">
          {<Outlet />}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
