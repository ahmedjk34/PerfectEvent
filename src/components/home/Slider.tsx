import styles from "../../styles/pages/home.module.scss";
import { useEffect, useState } from "react";
import { sliderArray } from "./data";
import { v4 } from "uuid";
type Props = {};

function Slider({}: Props) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [intervalId, setIntervalId] = useState<number | undefined>(undefined);
  const totalNumberOfSlides = 6;
  useEffect(() => {
    const newInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev % totalNumberOfSlides) + 1);
    }, 5000);
    setIntervalId(newInterval);
    return () => {
      clearInterval(newInterval);
    };
  }, []);
  useEffect(() => {
    console.log(currentSlide);
  }, [currentSlide]);
  function handleSlideAction(index: number) {
    clearInterval(intervalId);
    setCurrentSlide(index % totalNumberOfSlides == 0 ? 1 : index + 1);
    const newInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev % totalNumberOfSlides) + 1);
    }, 5000);
    setIntervalId(newInterval);
  }
  return (
    <div className={styles.sliderWrapper}>
      <div className={styles.slides}>
        {sliderArray.map((e, index) => (
          <img
            src={e}
            className={`${styles.slide} ${
              index + 1 == currentSlide ? styles.active : ""
            }`}
            key={v4()}
          ></img>
        ))}
      </div>
      <div className={styles.miniSlides}>
        {sliderArray.map((e, index) => (
          <img
            src={e}
            className={styles.miniSlide}
            key={v4()}
            onClick={() => {
              handleSlideAction(index);
            }}
          ></img>
        ))}
      </div>
    </div>
  );
}

export default Slider;
