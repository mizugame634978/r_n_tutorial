"use client"; //これがないとpropsで関数を渡せない
import { Footer } from "../../components/Footer";
import { Main } from "../../components/Main";
export default function Home() {
  return (
    <div>
      <Main page="index" />
      <Footer />
    </div>
  );
}
