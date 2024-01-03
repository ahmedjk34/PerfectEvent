import Hero from "./Hero";
import styles from "../../styles/pages/home.module.scss";
import WhatCanWeDoForYou from "./WhatCanWeDoForYou";

type Props = {};

function Home({}: Props) {
  return (
    <div className={styles.home}>
      <Hero />
      <WhatCanWeDoForYou />
    </div>
  );
}

export default Home;
