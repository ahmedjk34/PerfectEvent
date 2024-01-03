type Props = {};
import styles from "../styles/pages/nav.module.scss";
function Nav({}: Props) {
  return (
    <div className={styles.nav}>
      <h3>Home</h3>
      <h1>Perfect Event</h1>
      <h3>Book an Appointment</h3>
    </div>
  );
}

export default Nav;
