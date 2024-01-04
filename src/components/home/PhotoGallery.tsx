import styles from "../../styles/pages/home.module.scss";
import Slider from "./Slider";

type Props = {};

function PhotoGallery({}: Props) {
  return (
    <div className={styles.gallery}>
      <h1 className={styles.title}>Photo Gallery</h1>
      <Slider />
    </div>
  );
}

export default PhotoGallery;
