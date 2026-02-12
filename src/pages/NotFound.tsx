import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      Page Not Found. Go back to the <Link to="/">home page</Link>.
    </div>
  );
};

export default NotFound;
