import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  // ********** JSX ***********
  return (
    <div className="footer">
      Developed By{" "}
      <Link
        className="footer-link"
        to="https://www.linkedin.com/in/farimah-fti"
        rel="noopener noreferrer"
        target="_blank"
      >
        Farimah
      </Link>
    </div>
  );
};
