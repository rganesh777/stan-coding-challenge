import styles from "./CardsGrid.module.scss";

type Props = {
  children: React.ReactNode;
};

const MediaGrid = ({ children }: Props) => {
  return <ul className={styles.grid}>{children}</ul>;
};

export default MediaGrid;
