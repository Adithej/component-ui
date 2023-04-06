import { Inter } from "next/font/google";
import Button from "@/componenet/Button/Button";
// import { useState } from "react";
import styles from "../componenet/theme.module.scss";
import style from "/Users/mozilor/Desktop/assignment/component-ui/component-ui/componenet/variable.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // const [bagtheme, setTheme] = useState(styles.dark);
  // console.log("1 ", bagtheme);

  return (
    <div>
      <Button
        variant="primary"
        icon={<span>Primary</span>}
        children={undefined}
        onClick={() => {}}
      />
      {/* <Button
        variant="secondary"
        icon={<span>Secondary</span>}
        children={undefined}
      />
      <Button
        variant="danger"
        icon={<span>Danger</span>}
        children={undefined}
      /> */}
    </div>
  );
}
