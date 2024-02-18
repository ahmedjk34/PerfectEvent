import { useState } from "react";
import styles from "../../styles/pages/event.module.scss";
import { Option } from "./data";

type OptionWithFamily = {
  family: string;
  option: Option;
};

type Props = {
  currentlySelected: OptionWithFamily[];
};

function PaymentSection({ currentlySelected }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  function handlePay() {
    if (currentlySelected?.length < 5) return;
    else location.reload();
  }
  return (
    <div className={`${styles.paymentSection} ${isOpen ? styles.opened : ""}`}>
      <div className={styles.arrow} onClick={(e) => setIsOpen(!isOpen)}>
        {isOpen ? "▾" : "▴"}
      </div>
      <div className={styles.itemsWrapper}>
        {currentlySelected.map((e) => (
          <div className={styles.item}>
            <h2>{e.family}</h2>
            <div>
              <img src={e.option.img} alt={e.family}></img>
              <h3>{e.option.title}</h3>
              <p>{e.option.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <button onClick={handlePay}>Pay Now</button>
      </div>
    </div>
  );
}

export default PaymentSection;
