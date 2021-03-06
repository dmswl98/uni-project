import React from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../../assets/images/Logo.png";
import Button from "../../UI/Button";
import styles from "./Header.module.css";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className={styles.header}>
      <div>
        <Link to={"/"}>
          <img className={styles.logo} src={logo} />
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to={"/"}>소개</Link>
          </li>
          <li className={styles.item}>
            <Link to={"/upload"}>두피진단</Link>
          </li>
          <li className={styles.item}>
            <Link to={"/"}>제품구매</Link>
          </li>
        </ul>
        <div>
          <Button
            className={[
              "transparent",
              styles["button-40"],
              styles["button-right-pad"],
            ].join(" ")}
            onClick={() => {
              navigate("/login");
            }}
          >
            로그인
          </Button>
          <Button
            className={["darkblue", styles["button-40"]].join(" ")}
            onClick={() => {
              navigate("/signup");
            }}
          >
            회원가입
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default React.memo(Header);
