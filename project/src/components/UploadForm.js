import { useState } from "react";
import iconUpload from "../assets/icons/iconUpload.png";
import UploadedImage from "./UploadedImage";
import styles from "./UploadForm.module.css";

const UploadForm = () => {
  const [imageFile, setImageFile] = useState("");
  const [isloaded, setIsLoaded] = useState(false);
  const [fileIsValid, setFileIsValid] = useState(true);

  const submitHandler = (e) => {
    e.preventDefault();
    // AddImageHandler();
    console.log("submit");
  };

  const imageChangeHandler = (e) => {
    if (!e.target.value) return;

    const file = e.target.files[0];
    setImageFile({ name: file.name, size: file.size });
    setIsLoaded((prevState) => !prevState);

    console.log(file);
    console.log(file.name);

    const reg = /(.*?)\.(jpg|jpeg|png)$/;
    const filename = file.name;

    if (!filename.match(reg)) {
      setFileIsValid(false);
      return;
    }
    setFileIsValid(true);
  };

  const imageRemoveHandler = () => {
    setImageFile("");
    setIsLoaded(false);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles["form-wrapper"]}>
        <input
          type="file"
          id="notification"
          name="notification"
          accept="image/jpg, image/png, image/jpeg"
          onChange={imageChangeHandler}
          disabled={isloaded}
        />
        <div className={styles["content-wrapper"]}>
          <div className={styles.icon}>
            <img src={iconUpload} alt="icon" />
          </div>
          <label htmlFor="notification">
            <p className={styles.title}>이곳에 이미지를 업로드해주세요.</p>
            <p className={styles.detail}>JPG or PNG file no more than 10MB</p>
          </label>
        </div>
      </div>
      {imageFile && (
        <UploadedImage
          file={imageFile}
          onClickRemove={imageRemoveHandler}
          // onClickPreview={imagePreviewHandler}
        />
      )}
      {!fileIsValid && <p>이미지 파일만 업로드해주세요.</p>}
      <button
        className={["green", styles["submit-btn"]].join(" ")}
        disabled={!isloaded || !fileIsValid}
      >
        진단하기
      </button>
    </form>
  );
};

export default UploadForm;
