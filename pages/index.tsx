import { Inter } from "next/font/google";
// import Button from "@/componenet/Button/Button";
// import Input from "@/componenet/Input/Input";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/componenet/Accordian/Accordian";
// import { useRef } from "react";

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
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other components'
          aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
