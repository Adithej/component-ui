import { Inter } from "next/font/google";
import Button from "@/componenet/Button/Button";
// import { useState } from "react";
import styles from "../componenet/theme.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  function handleClick() {
    console.log("check", document.body);
    if (document.body.classList.contains("dark")) {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
    // if (document.body.dataset.theme === "light") {
    //   document.body.dataset.theme = "dark";
    // } else {
    //   document.body.dataset.theme = "light";
    // }
  }

  return (
    <div>
      <Button
        variant="primary"
        icon={<span>Primary</span>}
        children={undefined}
        onClick={() => handleClick()}
      />
      {/* <Button
        variant="secondary"
        icon={<span>Secondary</span>}
        children={undefined}
      />
      <Button
        variant="danger"
        icon={<span>Danger</span>}
        children={undefined}
      /> */}
    </div>
  );
}
