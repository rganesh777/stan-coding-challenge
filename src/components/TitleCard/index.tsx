import { Link } from "react-router-dom";
import styles from "./TitleCard.module.scss";

type TitleCardProps = {
  title: string;
  link: string;
};

const TitleCard = ({ title, link }: TitleCardProps) => {
  return (
    <li>
      <Link to={link} className={styles.titleCardImage} title={title}>
        <span className="flex">{title}</span>
      </Link>
      <Link to={link} className={styles.titleCardLink} title={title}>
        Popular {title}
      </Link>
    </li>
  );
};

export default TitleCard;
