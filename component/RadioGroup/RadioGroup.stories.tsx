import { Meta } from "@storybook/react";
import { RadioGroup, RadioGroupItem } from "./RadioGroup";
import styles from "./RadioGroup.module.scss";

const meta: Meta<typeof RadioGroup> = {
  title: "Componenets/RadioGroup",
  component: RadioGroup,
};

export default meta;

export const DefaultRadioGroup = () => (
  <>
    <RadioGroup defaultValue="comfortable">
      <div className={styles["radiogroup-demo"]}>
        <RadioGroupItem value="default" id="r1" />
        <label htmlFor="r1" className={styles["radiogroup-label"]}>
          Default
        </label>
      </div>
      <div className={styles["radiogroup-demo"]}>
        <RadioGroupItem value="comfortable" id="r2" />
        <label htmlFor="r2" className={styles["radiogroup-label"]}>
          Comfortable
        </label>
      </div>
      <div className={styles["radiogroup-demo"]}>
        <RadioGroupItem value="compact" id="r3" />
        <label htmlFor="r3" className={styles["radiogroup-label"]}>
          Compact
        </label>
      </div>
    </RadioGroup>
  </>
);
