import { Outlet } from "react-router-dom";

const ErrorLayout: React.FC = () => {
  // ********** JSX ***********
  return (
    <div className="lg:w-[1000px] w-[90%] border-2 my-20 mx-auto border-purple-400 overflow-hidden rounded-lg backdrop-blur-md">
      {<Outlet />}
    </div>
  );
};

export default ErrorLayout;
