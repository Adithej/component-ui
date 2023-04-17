import { Inter } from "next/font/google";
import Button from "@/componenet/Button/Button";
import Input from "@/componenet/Input/Input";
// import { useState } from "react";

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
      <Input
        variant="primary"
        type={"email"}
        icon={undefined}
        placeholder={"email"}
        children={<label></label>}
      />
      <br></br>
      <Input
        variant="secondary"
        type={"email"}
        icon={undefined}
        placeholder={"email"}
        children={<label>Email</label>}
      />
      <br></br>
      <Input
        variant="error"
        type={"email"}
        icon={undefined}
        placeholder={"email"}
        children={<label></label>}
      />
      <br></br>
      {/* <Button
        variant="primary"
        icon={<span>Primary</span>}
        children={undefined}
        onClick={() => handleClick()}
      /> */}
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
