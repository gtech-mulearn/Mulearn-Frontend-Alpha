import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./index.module.css";
import { Landing } from "./components/hero";
import demo from "./demo.png";
import { ClickSvg, Clock, FileSvg, Location } from "./components/assets/svg";
import { PartnersCarrers } from "../../components/partners";

const Careers = () => {
  const [careers, setCareers] = useState<CareerData[]>([]);
  const [oldData, setOldData] = useState<CareerData[]>([]);

  useEffect(() => {
    const fetchCareers = async () => {
      try {
        const response = await axios.get<CareerData[]>(
          "https://opensheet.elk.sh/1Afdbru7Neywhh8S2f0ACv7NJBKvoLKrcFf0eajYpmOo/careersNew"
        );
        setCareers(response.data);
        const oldResponse = await axios.get<CareerData[]>(
          "https://opensheet.elk.sh/1Afdbru7Neywhh8S2f0ACv7NJBKvoLKrcFf0eajYpmOo/careersOld"
        );
        setOldData(oldResponse.data);
      } catch (error) {
        console.error("There was an error fetching the career data:", error);
      }
    };

    fetchCareers();
  }, []);
  return (
    <div>
      <Landing />
      <PartnersCarrers />
      {careers.length > 0 ? (
        <div className={styles.careersWrapper}>
          {" "}
          <h1>
            <span className="colorText">Live</span> Hiring Calls
          </h1>
          <div>
            {careers.map((career, index) => (
              <div key={index}>
                <img src={demo} alt="" />
                <div>
                  <h3>{career.organization}</h3>
                  <div>
                    <p>
                      <Clock /> 6 months
                    </p>
                    <p>
                      <Location /> <p>{career.location}</p>
                    </p>
                  </div>
                </div>
                <h1>{career.role}</h1>
                <p>{career.remuneration}</p>

                <p>{career.lastdate}</p>

                <div>
                  <a href="">
                    <FileSvg />
                    &nbsp;View JD
                  </a>
                  <a href={career.applylink} target="_blank" rel="noreferrer">
                    Apply&nbsp;
                    <ClickSvg />
                  </a>
                </div>
              </div>
            ))}
          </div>
          <h1>
            <span className="colorText">Previous</span> Hiring
          </h1>
          <ul>
            {oldData.map((career, index) => (
              <li key={index}>
                <img src={demo} alt="" />

                <h3>µLearn Hiring Call</h3>
                <p>{career.date}</p>
                <p>{career.remuneration}</p>
                <p>{career.role}</p>
                <p>{career.location}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading careers...</p>
      )}
    </div>
  );
};

export default Careers;
