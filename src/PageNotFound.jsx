import { Link } from "react-router";

export function PageNotFound() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>404 - Page Not Found</h1>
      <h2>Oops! Something went wrong.</h2>
      <Link to="/">Go to Home Page</Link>
      <div>
        <img
          style={{ width: "50%" }}
          src="https://admiral.digital/wp-content/uploads/2023/08/404_page-not-found.png"
          alt="404 Page Not Found"
        />
      </div>
    </div>
  );
}
