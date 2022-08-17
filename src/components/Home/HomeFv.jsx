import styles from "../../styles/Home.module.css";

export const HomeFv = () => {
  return (
    <section className={`h-screen relative ${styles.fv}`}>
      <div className="w-11/12 max-w-7xl mx-auto">
      <h1
        className={`w-11/12 max-w-7xl mx-auto tracking-tight ${styles.fvTitle}`}
      >
        <span className={styles.gradient}>Front End</span>
        <br />
        Output
        <br />
        Blog
      </h1>
      </div>
    </section>
  );
};

