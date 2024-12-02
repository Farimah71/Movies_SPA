import { Link } from "react-router-dom";
import { Button } from "../../components/button";
import Error404 from "../../assets/404/18.png";

const NotFound: React.FC = () => {
  // ********** JSX ***********
  return (
    <div className="relative text-white flex flex-col gap-y-10 md:p-20 p-5 pb-20 items-center justify-between">
      <h1 className="font-black md:text-4xl text-2xl mt-20">Ooops!</h1>
      <img src={Error404} alt="404 error" width={500} />
      <span className="text-gray-400 md:text-xl text-lg font-semibold">
        Something is wrong!
      </span>
      <span className="text-gray-400 md:text-2xl text-lg font-semibold mb-32">
        We couldn't find that page.
      </span>
      <Link to={"/"}>
        <Button title="Return" />
      </Link>
    </div>
  );
};

export default NotFound;
