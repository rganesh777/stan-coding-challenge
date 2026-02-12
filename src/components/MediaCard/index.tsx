import React from "react";
import { Link } from "react-router-dom";
import type { MediaItem } from "../../types/media";
import styles from "./MediaCard.module.scss";

const MediaCard = ({ item: { title = "", images } }: { item: MediaItem }) => {
  return (
    <li className={styles.mediaCard}>
      <Link to="#" title={title}>
        <span className={styles.mediaCardImage}>
          <img
            src={images["Poster Art"]?.url ?? ""}
            alt={title}
            loading="lazy"
          />
        </span>
        <span>{title}</span>
      </Link>
    </li>
  );
};

export default React.memo(MediaCard);
