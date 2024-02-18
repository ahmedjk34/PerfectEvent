import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Content, eventContentArray, Option, optionsArray } from "./data";
import styles from "../../styles/pages/event.module.scss";
import { v4 } from "uuid";
import PaymentSection from "./PaymentSection";
type Props = {};
type OptionWithFamily = {
  family: string;
  option: Option;
};

function Event({}: Props) {
  const { id } = useParams();
  const [content, setContent] = useState<Content | null>(null);
  const [currentlySelected, setCurrentlySelected] = useState<
    OptionWithFamily[]
  >([]);
  useEffect(() => {
    setContent(eventContentArray.filter((e) => e.id == Number(id))[0] ?? null);
  }, [id]);
  function setSectionAttributes(index: number): string {
    if (index == 0) {
      return "Theme";
    } else if (index == 1) {
      return "Venue";
    }
    if (index == 2) {
      return "chairs";
    } else if (index == 3) {
      return "Flowers";
    } else {
      return "Food";
    }
  }
  function handleChange(option: Option, family: string) {
    const optionWithFamily: OptionWithFamily = { family, option };
    setCurrentlySelected((prev) => prev.filter((e) => e.family != family));
    setCurrentlySelected((prev) => [...prev, optionWithFamily]);
  }
  function isChecked(title: string) {
    let doesExist = false;
    currentlySelected.forEach((e) => {
      if (e.option.title === title) doesExist = true;
    });
    return doesExist;
  }
  useEffect(() => {
    console.log(currentlySelected);
  }, [currentlySelected]);
  return (
    <div className={styles.eventPage}>
      <img
        src={content?.img}
        alt={content?.title}
        className={styles.mainImg}
      ></img>
      <h1>{content?.title}</h1>
      <div className={styles.ourViewSection}>
        <h2>Our View</h2>
        <p>{content?.our_view}</p>
      </div>
      <h1>Select The Design</h1>
      <div className={styles.selectDesign}>
        {optionsArray.map((section, index) => (
          <div key={v4()}>
            <h2 className={styles.mainTitle}>{section.mainTitle}</h2>
            <div className={styles.optionsWrapper}>
              {section.options.map((option) => (
                <div key={v4()}>
                  <img src={option.img} alt={option.title}></img>
                  <h3>
                    {option.title}
                    <span>{option.price}</span>
                  </h3>
                  <input
                    type="radio"
                    name={setSectionAttributes(index)}
                    value={option.title}
                    checked={isChecked(option.title)}
                    onChange={() =>
                      handleChange(option, setSectionAttributes(index))
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <PaymentSection currentlySelected={currentlySelected} />
    </div>
  );
}

export default Event;
