import { Link, Outlet, useNavigate } from "react-router-dom";

const Paths = () => {
  const navigate = useNavigate();
  return (
    <div className="container mt-4">
      <h1>
        Online IT Courses to Become a Qualified IT Professional with EYPES
      </h1>

      <p className="fs-5">
        Join outstanding companies with rewarding salaries. We offer the
        highest-demand IT skills YOU need for success! CHOOSE THE BEST COURSE
        FOR YOU Upgrade your career with the best online training led by top IT
        experts!
      </p>
      <div>
        <button
          onClick={() => navigate("frontend")}
          className="btn btn-info w-50"
        >
          Frontend
        </button>
        <Link to="" className="btn btn-danger w-50">
          Backend
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Paths;
