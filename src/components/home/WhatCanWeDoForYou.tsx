import styles from "../../styles/pages/home.module.scss";
import { contentArray } from "./data";
import { v4 } from "uuid";
import { useInView } from "react-intersection-observer";

type Props = {};

function WhatCanWeDoForYou({}: Props) {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });
  const contentClass = `${styles.contentWrapper} ${
    inView ? styles.active : ""
  }`;
  return (
    <div className={styles.whatWeCanDoForYou} ref={ref}>
      <h1 className={styles.title}>What Can We Do For You</h1>
      <div className={contentClass}>
        {contentArray.map((e) => (
          <div key={v4()} className={styles.content}>
            <img src={e.img} alt="content image"></img>
            <h1>{e.title}</h1>
            <h3>{e.desc}</h3>
            <button>Learn More</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhatCanWeDoForYou;
