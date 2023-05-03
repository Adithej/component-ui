import { Meta } from "@storybook/react";
import { Toggle } from "./Toggle";
import styles from "./Toggle.module.scss";
import { Bold } from "lucide-react";

const meta: Meta<typeof Toggle> = {
  title: "Componenets/Toggle",
  component: Toggle,
};

export default meta;

export const DefaultToggle = () => (
  <>
    <Toggle>
      <Bold className={styles["demo-toggle"]} />
    </Toggle>
  </>
);
