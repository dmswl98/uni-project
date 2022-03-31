import iconImage from "../assets/icons/iconImage.png";
import styles from "./UploadedImage.module.css";

const UploadedImage = ({ file, onClickPreview, onClickRemove }) => {
  return (
    <div className={styles.uploadedImage}>
      <div className={styles.icon}>
        <img src={iconImage} />
      </div>
      <div className={styles.detail}>
        <p className={styles.filename}>{file.name}</p>
        <button className={styles.preview} onClick={onClickPreview}>
          미리보기
        </button>
      </div>
      <p className={styles.filesize}>{file.size}</p>
      <button className={styles.remove} onClick={onClickRemove}>
        삭제
      </button>
    </div>
  );
};

export default UploadedImage;
