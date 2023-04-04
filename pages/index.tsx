import { Inter } from "next/font/google";
import Button from "@/componenet/Button/Button";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="btn-wrapper">
      <Button
        variant="primary"
        icon={<span>Primary</span>}
        children={undefined}
      />
      <Button
        variant="secondary"
        icon={<span>Secondary</span>}
        children={undefined}
      />
      <Button
        variant="danger"
        icon={<span>Danger</span>}
        children={undefined}
      />
    </div>
  );
}
