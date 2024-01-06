import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";
import styles from "../../styles/pages/discover.module.scss";
import contentArray from "./data";
type Props = {};

function Discover({}: Props) {
  const navigation = useNavigate();
  return (
    <div className={styles.discover}>
      <h1>We Can Make Anything Below A Reality!</h1>
      <div>
        {contentArray.map((e, index) => (
          <div key={v4()} onClick={() => navigation(`/event/${index + 1}`)}>
            <img src={e.img} alt={e.title}></img>
            <h2>
              <span>{e.title}</span>
              <span>{e.price}₪+</span>
            </h2>
            <h3>{e.desc}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Discover;
