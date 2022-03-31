import iconCheck from "../../assets/icons/iconCheck.png";
import imgContent1 from "../../assets/images/img-serviceContent1.png";
import styles from "./ServiceContent.module.css";

const ServiceContent = () => {
  return (
    <div className={styles.content}>
      <p className={styles.category}>Our Services</p>
      <h1 className={styles.title}>
        Handshake infographic mass market
        <br /> crowdfunding iteration.
      </h1>
      <div className={styles["content-list"]}>
        <div className={styles["content-item"]}>
          <div className={styles["content-left"]}>
            <img src={imgContent1} />
          </div>
          <div className={styles["content-right"]}>
            <h3 className={styles["content-title"]}>
              한눈에 보기 쉬운 <br />
              두피 상태 그래프
            </h3>
            <ul className={styles["content-detail-list"]}>
              <li className={styles["content-detail-item"]}>
                <img src={iconCheck} />
                <p>6가지 유형으로 알아보는 두피 상태</p>
              </li>
              <li className={styles["content-detail-item"]}>
                <img src={iconCheck} />
                <p>두피 유형에 따른 관리법</p>
              </li>
              <li className={styles["content-detail-item"]}>
                <img src={iconCheck} />
                <p>예방법</p>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles["content-item"]}>
          <div className={styles["content-left"]}>
            <img src={imgContent1} />
          </div>
          <div className={styles["content-right"]}>
            <h3 className={styles["content-title"]}>
              지속적으로 두피 상태를 기록
            </h3>
            <div>
              <ul className={styles["content-detail-list"]}>
                <li className={styles["content-detail-item"]}>
                  <img src={iconCheck} />
                  <p>6가지 유형으로 알아보는 두피 상태</p>
                </li>
                <li className={styles["content-detail-item"]}>
                  <img src={iconCheck} />
                  <p>두피 유형에 따른 관리법</p>
                </li>
                <li className={styles["content-detail-item"]}>
                  <img src={iconCheck} />
                  <p>예방법</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles["content-item"]}>
          <div className={styles["content-left"]}>
            <img src={imgContent1} />
          </div>
          <div className={styles["content-right"]}>
            <h3 className={styles["content-title"]}>
              We connect our customers with the best, and help them keep up-and
              stay open.
            </h3>
            <ul className={styles["content-detail-list"]}>
              <li className={styles["content-detail-item"]}>
                <img src={iconCheck} />
                <p>6가지 유형으로 알아보는 두피 상태</p>
              </li>
              <li className={styles["content-detail-item"]}>
                <img src={iconCheck} />
                <p>두피 유형에 따른 관리법</p>
              </li>
              <li className={styles["content-detail-item"]}>
                <img src={iconCheck} />
                <p>예방법</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceContent;
