import { useState } from "react";
import styles from "./index.module.css";
import {
  LCOrange,
  LCblack,
  OfficeBlack,
  OfficeORange,
  TinkTanksBlack,
  TinkTanksOrange,
} from "./svg";

type Props = {};

export const WhatHappens = (_props: Props) => {
  const data = [
    {
      name: "Think Tanks",
      para: "A place where Interest Group leads and mentors team up, blending their skills and passion to catalyze transformative change. Through brainstorming, strategic planning, and resource pooling they tackle challenges and seize opportunities.",
      iconb: <TinkTanksBlack />,
      icono: <TinkTanksOrange />,
    },
    {
      name: "Office Hours",
      para: "A dynamic space to explore the tech sphere and a passport to connect with enthusiasts, experts, and beginners alike! Simply mark your calendar, log in at the designated time, and let the magic unfold.",
      iconb: <OfficeBlack />,
      icono: <OfficeORange />,
    },
    {
      name: "Learning Circles",
      para: "The gathering spots for inquisitive minds as they mingle over a shared love of knowledge. It’s the perfect opportunity to explore new topics with fellow passion-seekers and indulge in intellectual banter! ",
      iconb: <LCblack />,
      icono: <LCOrange />,
    },
  ];
  // State to keep track of expanded items
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  // Function to toggle the expanded state of an item
  const toggleExpand = (index: number) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [index]: !prevExpanded[index],
    }));
  };
  const truncateText = (text: string, limit: number) => {
    const words = text.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + "...";
    }
    return text;
  };
  return (
    <div className={styles.Wrapper}>
      <h1>
        <span className="colorText">What happens</span> at µLearn?
      </h1>
      <div>
        {data.map((item, index) => {
          const isExpanded = expanded[index]; // Check if the current item is expanded
          const displayedText = isExpanded
            ? item.para
            : truncateText(item.para, 15); // Display full text if expanded, else truncated

          return (
            <div
              key={index}
              className={styles.Individual}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <div className={styles.back}></div>
              <div className={styles.Content}>
                <div>{hoverIndex ? item.icono : item.iconb}</div>
                <h2>{item.name}</h2>
                <p>{displayedText}</p>
                <button onClick={() => toggleExpand(index)}>
                  {isExpanded ? "Show Less" : "Know More"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
