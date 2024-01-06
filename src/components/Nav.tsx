type Props = {};
import { Link } from "react-router-dom";
import styles from "../styles/pages/nav.module.scss";
function Nav({}: Props) {
  return (
    <div className={styles.nav}>
      <h3>
        <Link to="/">Home</Link>
      </h3>
      <h1>Perfect Event</h1>
      <h3>
        <Link to="/discover">Book an Appointment</Link>
      </h3>
    </div>
  );
}

export default Nav;
