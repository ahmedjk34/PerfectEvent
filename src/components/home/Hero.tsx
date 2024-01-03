import React from "react";
import styles from "../../styles/pages/home.module.scss";
type Props = {};

function Hero({}: Props) {
  return (
    <div className={styles.hero}>
      <div className={styles.videoHolder}>
        <video
          src="https://categories.api.godaddy.com/v4/videos/raw/video/QzOkGNa"
          className={styles.heroVideo}
          autoPlay
          loop
          muted
        ></video>
        <div className={styles.videoOverlay}></div>
      </div>
      <div className={styles.heroInfo}>
        <h1>Good Events = Good Memories</h1>
        <h3>
          For an unmissable day , lets help you organize your perfect event.
        </h3>
        <button>Organize Now</button>
        <p>+(212) 658-3916</p>
      </div>
    </div>
  );
}

export default Hero;
