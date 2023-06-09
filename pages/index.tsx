import { Inter } from "next/font/google";

import Input from "@/component/Input";
import AccordionDemo from "./Demo/AccordionDemo";
import { CheckboxDemo } from "./Demo/CheckboxDemo";
import { ContextMenuDemo } from "./Demo/ContextMenuDemo";
import { RadioGroupDemo } from "./Demo/RadioGroupDemo";
import { SelectDemo } from "./Demo/SelectDemo";
import Button from "@/component/Button";
import Demo from "./Demo/index";
import { Textarea } from "@/component/TextArea/TextArea";
import { TextareaDemo } from "./Demo/TextAreaDemo";
import { DialogDemo } from "./Demo/DialogDemo";
import { CardDemo } from "./Demo/CardDemo";
import { TooltipDemo } from "./Demo/TooltipDemo";
import { ProgressDemo } from "./Demo/ProgressDemo";
import { NavigationMenuDemo } from "./Demo/NavigationMenuDemo";
import { ToggleDemo } from "./Demo/ToggleDemo";
import { ToastDemo } from "./Demo/ToastDemo";
import { PopoverDemo } from "./Demo/PopoverDemo";
import { AvatarDemo } from "./Demo/AvatarDemo";
import Dashboard from "./Dashboard";
import { CalendarDemo } from "./Demo/CalendarDemo";
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
      {/* <Button icon={undefined} children={undefined} variant="primary" />
      <br></br>
      <Button icon={undefined} children={undefined} variant="secondary" />
      <br></br>
      <Button icon={undefined} children={undefined} variant="danger" /> */}

      {/* <Input type={"email"} placeholder={"Email"} />
      <br></br> */}
      {/* <AccordionDemo /> */}
      {/* <SelectDemo /> */}
      {/* <CheckboxDemo /> */}
      {/* <ContextMenuDemo /> */}
      {/* <RadioGroupDemo /> */}
      {/* <Demo /> */}
      {/* <TextareaDemo /> */}
      {/* <DialogDemo /> */}
      {/* <CardDemo /> */}
      {/* <TooltipDemo /> */}
      {/* <ProgressDemo /> */}
      {/* <NavigationMenuDemo /> */}
      {/* <ToggleDemo /> */}
      {/* <ToastDemo /> */}
      {/* <PopoverDemo /> */}
      {/* <AvatarDemo /> */}
      <Dashboard />
      {/* <CalendarDemo /> */}
    </>
  );
}
