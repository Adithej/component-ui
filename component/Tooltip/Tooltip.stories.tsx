import { Meta, StoryObj } from "@storybook/react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "./Tooltip";
import styles from "./Tooltip.module.scss";
import { Plus } from "lucide-react";

const meta: Meta<typeof Tooltip> = {
  title: "Componenets/Tooltip",
  component: Tooltip,
};

export default meta;

export const Default = () => (
  <>
    <div className={styles["story-align"]}>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button className={styles["icon-button"]}>
              <Plus className={styles["icon-plus"]} />
              <span className={styles["add-span"]}>Add</span>
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p className={styles["add-para"]}>Add to library</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  </>
);
