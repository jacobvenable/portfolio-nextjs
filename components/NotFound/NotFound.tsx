import styles from "./NotFound.module.scss";
import Image from "components/Image";
import png404 from "images/404.png";
import svg404 from "images/404.svg";

const NotFound: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>404 &#8212; Page Not Found</h1>
      <p className={styles.text}>We ain&apos;t found it!</p>
      <div className={styles.svgContainer}>
        <div className={styles.svg}>
          <object
            aria-hidden="true"
            className={styles.svgObject}
            data={svg404.src}
            tabIndex={-1}
            type="image/svg+xml"
          >
            <Image alt="" className="header__logo" src={png404} />
          </object>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
