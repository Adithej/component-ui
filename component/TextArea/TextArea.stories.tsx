import { Meta } from "@storybook/react";
import { Textarea } from "./TextArea";

const meta: Meta<typeof Textarea> = {
  title: "Componenets/Textarea",
  component: Textarea,
};

export default meta;

export const DefaultTextarea = () => (
  <>
    <Textarea placeholder="Type your message here." />
  </>
);

export const DisabledTextarea = () => (
  <>
    <Textarea placeholder="Type your message here." disabled />
  </>
);

// export const LabledTextarea = () => (
//   <>
//     <label>Your message</label>
//     <Textarea placeholder="Type your message here." disabled />
//   </>
// );
