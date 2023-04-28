import * as React from "react";
import { Meta } from "@storybook/react";
import { Progress } from "./Progress";
import styles from "./Progress.module.scss";

const meta: Meta<typeof Progress> = {
  title: "Componenets/Progress",
  component: Progress,
};

export default meta;

export function DefaultProgress() {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return <Progress value={progress} className={styles["demo-progress"]} />;
}
