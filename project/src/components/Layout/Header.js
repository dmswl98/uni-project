import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo.png";
import Button from "../../UI/Button";
import styles from "./Header.module.css";

const Header = () => {
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
          >
            로그인
          </Button>
          <Button className={["darkblue", styles["button-40"]].join(" ")}>
            회원가입
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default React.memo(Header);
