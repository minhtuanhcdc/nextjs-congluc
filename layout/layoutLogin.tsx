import styles from "@/styles/Layout.module.css";
export default function layout( {children} ) {
  return (
    <>
      <div className="flex h-screen bg-blue-400">
        <div className="m-auto bg-slate-50 rounded-md w-3/5 h-3/4 grid lg:grid-cols-2">
          <div className={styles.imgStyle}>
            <div className={styles.cartoolImg}></div>
            <div className={styles.cloud_one}></div>
            <div className={styles.cloud_one_one}></div>
            <div className={styles.cloud_two}></div>
            <div className={styles.baby_left}></div>
            <div className={styles.baby_right}></div>
            <div className={styles.baby_center}></div>
          </div>
          <div className="right flex flex-col justify-evenly">
            <div className="text-center py-10">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
