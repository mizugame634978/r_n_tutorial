import { Main } from "../../../components/Main";
import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import styles from "../page.module.css";
export default function Home() {
  return (
    <div className={styles.container}>
      <Header/>
      <Main page="hoge" />
      <Footer />
    </div>
  );
}
