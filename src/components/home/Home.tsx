import Hero from "./Hero";
import styles from "../../styles/pages/home.module.scss";
import WhatCanWeDoForYou from "./WhatCanWeDoForYou";
import PhotoGallery from "./PhotoGallery";
import VisitUs from "./VisitUs";

type Props = {};

function Home({}: Props) {
  return (
    <div className={styles.home}>
      <Hero />
      <WhatCanWeDoForYou />
      <PhotoGallery />
      <VisitUs />
    </div>
  );
}

export default Home;
