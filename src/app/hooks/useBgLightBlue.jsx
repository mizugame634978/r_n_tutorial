"use client"; //これがないとpropsで関数を渡せない
import {  useEffect } from "react";


export const useBgLightBlue = ()=>{
  useEffect(() => {
    //画面を読み込んだときに色を変えたかった
    document.body.style.backgroundColor = "lightblue";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

};