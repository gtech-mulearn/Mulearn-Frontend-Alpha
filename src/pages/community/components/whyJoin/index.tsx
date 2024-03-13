import { useState } from "react";
import styles from "./index.module.css";
import { EventsSvg, InternshipsSvg, MeetupsSvg, MentorsSvg } from "./svg";

const WhyJoin = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const data = [
    {
      Icon: EventsSvg,
      name: "Exclusive events",
    },
    {
      Icon: MentorsSvg,
      name: "Mentorship programs",
    },
    {
      Icon: InternshipsSvg,
      name: "Internship opportunities",
    },
    {
      Icon: MeetupsSvg,
      name: "Community meetups",
    },
  ];

  return (
    <div className={styles.Wrapper}>
      <h1>
        <span className="colorText">Why join</span> the community?
      </h1>
      <div className={styles.Contenrt}>
        {data.map((item, index) => (
          <div
            key={index}
            className={styles.Individual}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <div>
              <item.Icon
                colors={hoverIndex === index ? "#FFFFFF" : "#FF7940"}
              />
            </div>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyJoin;
