import Link from "next/link";
import styles from "./../../styles/Home.module.css";
const Layout = () => {
  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>
              <Link href="/components/firstcomponent">
                <a>First Component</a>
              </Link>
            </th>
            <th className={styles.th}>
              <Link href="/">
                <a>Index</a>
              </Link>
            </th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default Layout;
