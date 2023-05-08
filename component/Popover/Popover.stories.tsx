import { Meta } from "@storybook/react";
import { Popover, PopoverTrigger, PopoverContent } from "./Popover";
import styles from "./Popover.module.scss";
import { Settings2 } from "lucide-react";
import Input from "../Input";
const meta: Meta<typeof Popover> = {
  title: "Componenets/Popover",
  component: Popover,
};

export default meta;

export const Default = () => (
  <div className={styles["demo-position"]}>
    <Popover>
      <PopoverTrigger asChild>
        <button className={styles["demo-button"]}>
          <Settings2 className={styles["demo-settings"]} />
          <span className={styles["demo-span"]}>Open popover</span>
        </button>
      </PopoverTrigger>
      <PopoverContent className={styles["demo-popover-content"]}>
        <div className={styles["demo-popover-content-divs"]}>
          <div className={styles["demo-popover-content-div "]}>
            <h4 className={styles["demo-popover-content-head"]}>Dimensions</h4>
            <p className={styles["demo-popover-content-para"]}>
              Set the dimensions for the layer.
            </p>
          </div>
          <div className={styles["demo-popover-input-divs"]}>
            <div className={styles["demo-popover-input-div"]}>
              <label htmlFor="width">Width</label>
              <div className={styles["demo-popover-input"]}>
                <Input
                  id="width"
                  type={""}
                  placeholder={"100%"}
                  // defaultValue="100%"
                />
              </div>
            </div>
            <div className={styles["demo-popover-input-div"]}>
              <label htmlFor="maxWidth">Max. width</label>
              <div className={styles["demo-popover-input"]}>
                <Input
                  id="maxWidth"
                  type={""}
                  placeholder={"300px"} // defaultValue="300px"
                />
              </div>
            </div>
            <div className={styles["demo-popover-input-div"]}>
              <label htmlFor="height">Height</label>
              <div className={styles["demo-popover-input"]}>
                <Input
                  id="height"
                  type={""}
                  placeholder={"25px"} // defaultValue="25px"
                />
              </div>
            </div>
            {/* <div className={styles["demo-popover-input-div"]}>
              <label htmlFor="maxHeight">Max. height</label>
              <div className={styles["demo-popover-input"]}>
                <Input
                  id="maxHeight"
                  type={""}
                  placeholder={"none"} // defaultValue="none"
                />
              </div>
            </div> */}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  </div>
);
