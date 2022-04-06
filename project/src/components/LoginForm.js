import { useRef, useState } from "react";
import styles from "./LoginForm.module.css";
import { ReactComponent as IconEye } from "../assets/icons/iconEye.svg";
import { ReactComponent as IconEyeHidden } from "../assets/icons/iconEyeHidden.svg";

const isEmpty = (value) => value.trim() === "";

const LoginForm = () => {
  const [userData, setUserData] = useState({ id: "", password: "" });
  const [isWrittenPassword, setIsWrittenPassword] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [InputsValidity, setInputsValidity] = useState({
    id: true,
    password: true,
  });

  const idInputRef = useRef();
  const passwordInputRef = useRef();

  const passwordInputChangeHandler = (e) => {
    if (e.target.value) {
      setIsWrittenPassword(true);
    }
  };

  const iconButtonClickHandler = () => {
    setIsVisible((prevState) => !prevState);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submit");

    const enteredId = idInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setUserData({
      id: enteredId,
      password: enteredPassword,
    });

    const enteredIdIsValid = !isEmpty(enteredId);
    const enteredPasswordIsValid = !isEmpty(enteredPassword);

    setInputsValidity({
      id: enteredIdIsValid,
      password: enteredPasswordIsValid,
    });

    const formIsValid = enteredIdIsValid && enteredPasswordIsValid;

    if (!formIsValid) {
      if (!enteredIdIsValid) {
        idInputRef.current.focus();
      } else {
        passwordInputRef.current.focus();
      }
      return;
    }

    console.log({
      id: idInputRef.current.value,
      password: passwordInputRef.current.value,
    });
  };

  const idControlClasses = `${styles.control} ${
    InputsValidity.id ? "" : styles.invalid
  }`;

  const passwordControlClasses = `${styles.control} ${
    InputsValidity.password ? "" : styles.invalid
  }`;

  const iconButton = !isVisible ? (
    <IconEyeHidden fill="#0a2640" />
  ) : (
    <IconEye fill="#0a2640" />
  );

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={submitHandler}>
        <h1>로그인</h1>
        <p className={styles.content}>
          Sign in and start managing your scalp condition!
        </p>
        <div className={idControlClasses}>
          <label className={styles["sr-only"]} htmlFor="id">
            아이디
          </label>
          <input
            type="text"
            id="id"
            name="id"
            placeholder="아이디"
            ref={idInputRef}
          />
          {!InputsValidity.id && (
            <p className={styles["error-message"]}>아이디를 입력해주세요</p>
          )}
        </div>
        <div className={passwordControlClasses}>
          <label className={styles["sr-only"]} htmlFor="password">
            비밀번호
          </label>
          <input
            type={!isVisible ? "password" : "text"}
            id="password"
            name="password"
            placeholder="비밀번호"
            ref={passwordInputRef}
            onChange={passwordInputChangeHandler}
          />
          {isWrittenPassword ? (
            <button
              className={styles["icon-eye"]}
              type="button"
              onClick={iconButtonClickHandler}
            >
              {iconButton}
            </button>
          ) : (
            ""
          )}
          {!InputsValidity.password && (
            <p className={styles["error-message"]}>비밀번호를 입력해주세요</p>
          )}
        </div>
        <button className={styles["submit-button"]}>로그인</button>
      </form>
      <ul className={styles["find-wrapper"]}>
        <li>
          <a>비밀번호 찾기</a>
        </li>
        <li>
          <a>아이디 찾기</a>
        </li>
        <li>
          <a>회원가입</a>
        </li>
      </ul>
      <div className={styles.terms}>
        <span>
          회원가입 시 brand의 서비스 약관 및<br />
          개인정보 처리방침을 확인하였으며, 동의합니다.
        </span>
      </div>
    </div>
  );
};

export default LoginForm;
