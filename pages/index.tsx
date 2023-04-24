import { Inter } from "next/font/google";
// import Button from "@/componenet/Button/Button";
import Input from "@/component/Input";
import AccordionDemo from "./Demo/AccordionDemo";
import { CheckboxDemo } from "./Demo/CheckboxDemo";
import { ContextMenuDemo } from "./Demo/ContextMenuDemo";
import { RadioGroupDemo } from "./Demo/RadioGroupDemo";
import { SelectDemo } from "./Demo/SelectDemo";

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
    <>
      {/* <Input type={"email"} placeholder={"Email"} />
      <br></br> */}
      {/* <AccordionDemo /> */}
      {/* <SelectDemo /> */}
      <CheckboxDemo />
      {/* <ContextMenuDemo /> */}
      {/* <RadioGroupDemo /> */}
    </>
  );
}
