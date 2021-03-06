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
        <h1>?????????</h1>
        <p className={styles.content}>
          Sign in and start managing your scalp condition!
        </p>
        <div className={idControlClasses}>
          <label className={styles["sr-only"]} htmlFor="id">
            ?????????
          </label>
          <input
            type="text"
            id="id"
            name="id"
            placeholder="?????????"
            ref={idInputRef}
          />
          {!InputsValidity.id && (
            <p className={styles["error-message"]}>???????????? ??????????????????</p>
          )}
        </div>
        <div className={passwordControlClasses}>
          <label className={styles["sr-only"]} htmlFor="password">
            ????????????
          </label>
          <input
            type={!isVisible ? "password" : "text"}
            id="password"
            name="password"
            placeholder="????????????"
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
            <p className={styles["error-message"]}>??????????????? ??????????????????</p>
          )}
        </div>
        <button className={styles["submit-button"]}>?????????</button>
      </form>
      <ul className={styles["find-wrapper"]}>
        <li>
          <a>???????????? ??????</a>
        </li>
        <li>
          <a>????????? ??????</a>
        </li>
        <li>
          <a>????????????</a>
        </li>
      </ul>
      <div className={styles.terms}>
        <span>
          ???????????? ??? brand??? ????????? ?????? ???<br />
          ???????????? ??????????????? ??????????????????, ???????????????.
        </span>
      </div>
    </div>
  );
};

export default LoginForm;
