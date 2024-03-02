import styles from "./index.module.css";
import { useState, useEffect } from "react";
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Discord, LogoWhite } from "../../assets/svg";
type Props = {};

export const Navbars = (_props: Props) => {
  const [openmenu, setopenmenu] = useState(false);
  const [navbg, setNavBg] = useState(false);
  const navigate = useNavigate();
  function openMenu() {
    setopenmenu(!openmenu);
  }
  const navContent = ["Community", "Get Involved", "Careers", "Projects"];
  const changeNavBg = () => {
    window.scrollY >= 100 ? setNavBg(true) : setNavBg(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
  }, []);

  const renderLinks = (value: string) => {
    navigate(`/${value}`);
    setopenmenu(!openmenu);
  };

  return (
    <div
      className={styles.navbarWrapper}
      style={{
        background: navbg ? "rgba(255,255,255,0)" : "rgba(255,255,255,0)",
      }}
    >
      <div className={styles.navbarLeft}>
        <button
          onClick={() => navigate("/")}
          className={`${styles.logo} ${navbg ? " " : styles.hidden}`}
        >
          <LogoWhite />
        </button>
      </div>
      <div className={styles.navbarRight}>
        {navContent.map((content, i) => (
          <button
            onClick={() =>
              renderLinks(content.toLowerCase().replace(/\s+/g, "-"))
            }
            key={i}
          >
            <p
              style={{
                fontSize: "17px",
                fontWeight: 600,
                color: window.location.href.includes(
                  `/${content.toLowerCase().replace(/\s+/g, "-")}`
                )
                  ? "#5940D4"
                  : "#fff",
              }}
            >
              {content}
            </p>
          </button>
        ))}
      </div>
      <div className={styles.navbarMobile}>
        <button className={styles.menuMd} onClick={openMenu}>
          <MdMenu />
        </button>
        {openmenu && (
          <div>
            <button
              className={styles.menuMd}
              onClick={openMenu}
              style={{ color: "black" }}
            >
              <IoMdClose />
            </button>
            {navContent.map((content, i) => (
              <button
                onClick={() =>
                  renderLinks(content.toLowerCase().replace(/\s+/g, "-"))
                }
                key={i}
              >
                <p
                  style={{
                    fontSize: "17px",
                    fontWeight: 600,
                    color: window.location.href.includes(
                      `/${content.toLowerCase().replace(/\s+/g, "-")}`
                    )
                      ? "#FD2E35"
                      : "#342020",
                  }}
                >
                  {content}
                </p>
              </button>
            ))}
            <div className={styles.JoinUsWrap}>
              <button>
                <Discord />
              </button>
              <button className={styles.StudyButton}>Join Us</button>
            </div>
          </div>
        )}
      </div>{" "}
      <div className={styles.JoinUsWrap}>
        <button>
          <Discord />
        </button>
        <button className={styles.StudyButton}>Join Us</button>
      </div>
    </div>
  );
};
