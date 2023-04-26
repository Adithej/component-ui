import { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";
import styles from "./Checkbox.module.scss";

const meta: Meta<typeof Checkbox> = {
  title: "Componenets/Checkbox",
  component: Checkbox,
};

export default meta;

export const Default = () => (
  <>
    <div className={styles["demo"]}>
      <Checkbox id="terms" />
      <label htmlFor="terms" className={styles["demo-label"]}>
        Accept terms and conditions
      </label>
    </div>
  </>
);
