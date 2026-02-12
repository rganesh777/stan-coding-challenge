import styles from "./Header.module.scss";
import { Link, useLocation } from "react-router-dom";
import { routes } from "../../routes";

const Header = () => {
  const location = useLocation();
  const route = routes.find(({ path }) => path === location.pathname);

  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <div className="container">
          <div className={`${styles.headerTopInner} flex`}>
            <h1>
              <Link to="/">DEMO Streaming</Link>
            </h1>
            <nav>
              <ul className={`${styles.headerTopLinks} flex`}>
                <li>
                  <Link to="/login">Log in</Link>
                </li>
                <li>
                  <Link to="/signup" className={`${styles.btn} nav-cta`}>
                    Start your free trial
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className={styles.headerBottom}>
        <div className="container">
          <h2>{route?.title || "Popular Titles"}</h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
