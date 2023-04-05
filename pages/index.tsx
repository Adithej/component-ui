import { Inter } from "next/font/google";
import Button from "@/componenet/Button/Button";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [theme, setTheme] = useState("primary");
  return (
    <div className="btn-wrapper">
      <Button
        variant={theme}
        icon={<span>Primary</span>}
        children={undefined}
        onClick={() => setTheme(theme === "primary" ? "dark" : "primary")}
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
