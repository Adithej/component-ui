import React from "react";
import AccordionDemo from "./AccordionDemo";
import { CheckboxDemo } from "./CheckboxDemo";
import { ContextMenuDemo } from "./ContextMenuDemo";
import { RadioGroupDemo } from "./RadioGroupDemo";
import { SelectDemo } from "./SelectDemo";

function Demo() {
  return (
    <div>
      <AccordionDemo />
      <br></br>
      <CheckboxDemo />
      <br></br>
      <ContextMenuDemo />
      <br></br>
      <RadioGroupDemo />
      <br></br>
      <SelectDemo />
    </div>
  );
}

export default Demo;
