"use client";

import * as React from "react";

import { Progress } from "@/component/Progress";
import styles from "/Users/mozilor/Desktop/assignment/component-ui/component-ui/component/Progress/Progress.module.scss";

export function ProgressDemo() {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return <Progress value={progress} className={styles["demo-progress"]} />;
}
