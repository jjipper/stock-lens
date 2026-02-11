import styles from './SectionHeader.module.scss';

const SectionHeader = ({
  title,
  lastUpdate,
}: {
  title: string;
  lastUpdate: string;
}) => {
  return (
    <div className={styles.sectionHeader}>
      <h4 className={styles.title}>{title}</h4>
      <p>last update: {lastUpdate}</p>
    </div>
  );
};

export default SectionHeader;
