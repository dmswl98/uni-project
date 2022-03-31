import { useEffect, useState } from "react";
import iconUpload from "../../assets/icons/iconUpload.png";
import Button from "../../UI/Button";
import Container from "../../UI/Container";
import UploadedImage from "../UploadedImage";
import styles from "./UploadField.module.css";

const UploadField = () => {
  const [imageFile, setImageFile] = useState("");
  const [isloaded, setIsLoaded] = useState(false);

  const AddImageHandler = async () => {
    const response = await fetch(
      "https://react-http-d6f7c-default-rtdb.firebaseio.com/image.json",
      {
        method: "POST",
        body: JSON.stringify(imageFile),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    if (!isloaded) return;
    // AddImageHandler();
  }, [isloaded]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  const imageChangeHandler = (e) => {
    if (!e.target.value) return;

    const file = e.target.files[0];
    setImageFile({ name: file.name, size: file.size });
    setIsLoaded((prevState) => !prevState);
    console.log(file);
    console.log(file.name);
  };

  const imagePreviewHandler = () => {
    const reader = new FileReader();
    reader.readAsDataURL();
  };

  const imageRemoveHandler = () => {
    setImageFile("");
    setIsLoaded(false);
  };

  return (
    <div className={styles.uploadField}>
      <Container>
        <div className={styles.align}>
          <form className={styles.form} onSubmit={submitHandler}>
            <input
              type="file"
              id="notification"
              name="notification"
              accept="image/jpg, image/png, image/jpeg"
              onChange={imageChangeHandler}
              disabled={isloaded}
            ></input>
            <div className={styles.wrapper}>
              <div className={styles.icon}>
                <img src={iconUpload} />
              </div>
              <label htmlFor="notification">
                <p className={styles.title}>이곳에 이미지를 업로드해주세요.</p>
                <p className={styles.detail}>
                  JPG or PNG file no more than 10MB
                </p>
              </label>
            </div>
          </form>
          {imageFile && (
            <UploadedImage
              file={imageFile}
              onClickRemove={imageRemoveHandler}
            />
          )}
          <Button
            className={["darkblue", styles["button-60"]].join(" ")}
            disabled={!isloaded}
          >
            진단하기
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default UploadField;
