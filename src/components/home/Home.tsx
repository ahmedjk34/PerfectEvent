import Hero from "./Hero";
import styles from "../../styles/pages/home.module.scss";
type Props = {};

function Home({}: Props) {
  return (
    <div className={styles.home}>
      <Hero />
    </div>
  );
}

export default Home;
