import React, { useState } from "react";
import { ReactComponent as IconEye } from "../assets/icons/iconEye.svg";
import { ReactComponent as IconEyeHidden } from "../assets/icons/iconEyeHidden.svg";
import styles from "./SignupForm.module.css";

const SignupForm = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [enteredGender, setEnteredGender] = useState("");
  const [enteredId, setEnteredId] = useState("");
  const [enteredPassword1, setEnteredPassword1] = useState("");
  const [enteredPassword2, setEnteredPassword2] = useState("");
  const [InputsTouch, setInputsTouch] = useState({
    name: false,
    age: {
      year: false,
      month: false,
      day: false,
    },
    gender: false,
    id: false,
    password1: false,
    password2: false,
  });
  const [InputsValidity, setInputsValidity] = useState({
    name: true,
    age: {
      year: true,
      month: true,
      day: true,
    },
    gender: true,
    id: true,
    password1: true,
    password2: true,
  });

  // Change Handler
  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const genderInputChangeHandler = (e) => {
    setEnteredGender(e.target.value);
  };

  const idInputChangeHandler = (e) => {
    setEnteredId(e.target.value);
  };

  const pwd1InputChangeHandler = (e) => {
    setEnteredPassword1(e.target.value);
  };

  const pwd2InputChangeHandler = (e) => {
    setEnteredPassword2(e.target.value);
  };

  // Blur Handler
  const nameInputBlurHandler = (e) => {
    setInputsTouch((prevState) => !prevState.name);
    if (enteredName.trim() === "") {
      setInputsValidity((prevState) => (prevState.name = false));
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={submitHandler}>
        <h1>회원가입</h1>
        <p className={styles.content}>
          Sign in and start managing your scalp condition!
        </p>
        <div className={styles.control}>
          <label htmlFor="name">이름</label>
          <div className={styles.input}>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="이름"
              onChange={nameInputChangeHandler}
              onBlur={nameInputBlurHandler}
              value={enteredName}
            />
            {!InputsValidity.name && (
              <p className={styles["error-message"]}>이름을 입력해주세요</p>
            )}
          </div>
        </div>
        <div className={styles.control}>
          <label htmlFor="password">생년월일</label>
          <div className={styles.input}>
            <ul className={styles["birth-wrap"]}>
              <li className={styles.year}>
                <input
                  type="text"
                  id="year"
                  name="year"
                  placeholder="년 (4자리)"
                  maxLength="4"
                />
              </li>
              <li className={styles.month}>
                <select id="month" defaultValue="default">
                  <option value="default" disabled>
                    월
                  </option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                  <option value={7}>7</option>
                  <option value={8}>8</option>
                  <option value={9}>9</option>
                  <option value={10}>10</option>
                  <option value={11}>11</option>
                  <option value={12}>12</option>
                </select>
              </li>
              <li className={styles.day}>
                <input
                  type="text"
                  id="day"
                  name="day"
                  placeholder="일"
                  maxLength="2"
                />
              </li>
            </ul>
            {/* {!InputsValidity.password && (
            <p className={styles["error-message"]}>비밀번호를 입력해주세요</p>
          )} */}
          </div>
        </div>
        <div className={styles.control}>
          <label htmlFor="id">성별</label>
          <div className={`${styles.input} ${styles.gender}`}>
            <select id="gender" defaultValue="default">
              <option value="default" disabled>
                성별
              </option>
              <option value="M">남자</option>
              <option value="F">여자</option>
            </select>
            {/* {!InputsValidity.id && (
            <p className={styles["error-message"]}>아이디를 입력해주세요</p>
          )} */}
          </div>
        </div>
        <div className={styles.control}>
          <label htmlFor="id">아이디</label>
          <div className={styles.input}>
            <input
              type="text"
              id="id"
              name="id"
              placeholder="아이디"
              onChange={idInputChangeHandler}
              value={enteredId}
            />
            {/* {!InputsValidity.id && (
            <p className={styles["error-message"]}>아이디를 입력해주세요</p>
          )} */}
          </div>
        </div>
        <div className={styles.control}>
          <label htmlFor="password1">비밀번호</label>
          <div className={styles.input}>
            <input
              type="password"
              id="password1"
              name="password1"
              placeholder="비밀번호 (영문, 숫자, 특수문자 8-30자)"
              onChange={pwd1InputChangeHandler}
              value={enteredPassword1}
            />
            <button
              className={styles["icon-eye"]}
              type="button"
              // onClick={iconButtonClickHandler}
            >
              <IconEyeHidden fill="#0a2640" />
            </button>
            {/* {!InputsValidity.id && (
            <p className={styles["error-message"]}>아이디를 입력해주세요</p>
          )} */}
          </div>
        </div>
        <div className={styles.control}>
          <label htmlFor="password2">비밀번호 확인</label>
          <div className={styles.input}>
            <input
              type="password"
              id="password2"
              name="password2"
              placeholder="비밀번호 확인"
              onChange={pwd2InputChangeHandler}
              value={enteredPassword2}
            />
            <button
              className={styles["icon-eye"]}
              type="button"
              //onClick={iconButtonClickHandler}
            >
              <IconEyeHidden fill="#0a2640" />
            </button>
            {/* {!InputsValidity.id && (
            <p className={styles["error-message"]}>아이디를 입력해주세요</p>
          )} */}
          </div>
        </div>
        <button className={styles["submit-button"]}>회원가입</button>
      </form>
    </div>
  );
};

export default SignupForm;
