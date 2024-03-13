import styles from "./index.module.css";
import { useState, useEffect } from "react";
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Discord, LogoWhite } from "../../assets/svg";
type Props = {};

export const Navbars = (_props: Props) => {
  const [openmenu, setopenmenu] = useState(false);
  const navigate = useNavigate();
  function openMenu() {
    setopenmenu(!openmenu);
  }
  const navContent = [
    "Home",
    "Community",
    "Get Involved",
    "Careers",
    "Projects",
  ];

  const handleNavigation = (value: string) => {
    navigate(`/${value}`);
    setopenmenu(!openmenu);
  };
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const [navStyle, setNavStyle] = useState({});

    useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY < lastScrollY) {
          // Scrolling up
          setNavStyle({
            position: "fixed",
            top: 0,
            width: "100%",
          });
        } else {
          setNavStyle({
            position: "unset",
          });
        }

        if (window.scrollY == 0) {
          setNavStyle({
            position: "fixed",
          });
        }
        setLastScrollY(currentScrollY);
      };

      window.addEventListener("scroll", handleScroll, { passive: true });

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [lastScrollY]);
  return (
    <div
      className={styles.navbarWrapper}
    
      style={navStyle}
    >
      <div className={styles.navbarLeft}>
        <button onClick={() => navigate("/")} className={`${styles.logo} `}>
          <LogoWhite />
        </button>
      </div>
      <div className={styles.navbarRight}>
        {navContent.map((content, i) => (
          <button
            onClick={() =>
              handleNavigation(content.toLowerCase().replace(/\s+/g, "-"))
            }
            key={i}
          >
            <p
              style={{
                fontSize: "17px",
                fontWeight: 500,
                color: window.location.href.includes(
                  `/${content.toLowerCase().replace(/\s+/g, "-")}`
                )
                  ? "#FF7940"
                  : "#000",
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
                  handleNavigation(content.toLowerCase().replace(/\s+/g, "-"))
                }
                key={i}
              >
                <p
                  style={{
                    fontSize: "17px",
                    fontWeight: 500,
                    color: window.location.href.includes(
                      `/${content.toLowerCase().replace(/\s+/g, "-")}`
                    )
                      ? "#FF7940"
                      : "#000",
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
