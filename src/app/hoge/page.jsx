import { Main } from "@/app/components/Main";
import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
import styles from "@/app/page.module.css";
export default function Home() {
  return (
    <div className={styles.container}>
      <Header/>
      <Main page="hoge" />
      <Footer />
    </div>
  );
}
