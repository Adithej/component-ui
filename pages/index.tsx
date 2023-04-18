import { Inter } from "next/font/google";
// import Button from "@/componenet/Button/Button";
import Input from "@/componenet/Input/Input";
import AccordionDemo from "@/componenet/Accordian/AccordianDemo";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  function handleClick() {
    console.log("check", document.body);
    if (document.body.classList.contains("dark")) {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
    // if (document.body.dataset.theme === "light") {
    //   document.body.dataset.theme = "dark";
    // } else {
    //   document.body.dataset.theme = "light";
    // }
  }

  return (
    <>
      <Input
        variant="primary"
        type={"email"}
        placeholder={"email"}
        children={<label>Email</label>}
        icon={<></>}
      />
      <br></br>
      <Input
        disabled
        variant="primary"
        type={"email"}
        placeholder={"Email"}
        children={<label></label>}
        icon={<></>}
      />
      <br></br>
      <Input
        variant="secondary"
        type={"email"}
        placeholder={"Email"}
        children={<label></label>}
        icon={<></>}
      />
      <br></br>
      <Input
        variant="error"
        type={"password"}
        placeholder={"Password"}
        children={<label>Password</label>}
        icon={<></>}
      />
      <br></br>
      <AccordionDemo />
    </>
  );
}
