// import Button from "@/component/Button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/component/Tooltip";
import styles from "/Users/mozilor/Desktop/assignment/component-ui/component-ui/component/Tooltip/Tooltip.module.scss";
import { Plus } from "lucide-react";

export function TooltipDemo() {
  return (
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
  );
}
