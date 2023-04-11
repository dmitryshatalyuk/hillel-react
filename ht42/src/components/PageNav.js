import { Link } from "react-router-dom";

export function PagesNav() {
  return (
    <header className="header">
      <div className="header-wrapper">
        <nav>
          <Link exact to="/">
            Home
          </Link>
          <Link to="/users">Users</Link>
        </nav>
      </div>
    </header>
  );
}
