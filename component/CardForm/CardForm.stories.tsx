import { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "./CardForm";
import Button from "../Button";
import Input from "../Input";
import styles from "./CardForm.module.scss";
import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "../Select";

const meta: Meta<typeof Card> = {
  title: "Componenets/Card",
  component: Card,
};

export default meta;

export const CardForm = () => (
  <>
    <Card className={styles["demo-card"]}>
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className={styles["demo-card-titles"]}>
            <div className={styles["demo-card-title"]}>
              <label className={styles["demo-card-label"]} htmlFor="name">
                Name
              </label>
              <div className={styles["demo-card-input"]}>
                <Input id="name" placeholder="Name of your project" type={""} />
              </div>
            </div>
            <div className={styles["demo-card-title"]}>
              <label className={styles["demo-card-label"]} htmlFor="name">
                Framework
              </label>
              <div className={styles["demo-card-select"]}>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                    <SelectContent position="popper">
                      <SelectItem value="next">Next.js</SelectItem>
                      <SelectItem value="sveltekit">SvelteKit</SelectItem>
                      <SelectItem value="astro">Astro</SelectItem>
                      <SelectItem value="nuxt">Nuxt.js</SelectItem>
                    </SelectContent>
                  </SelectTrigger>
                </Select>
              </div>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className={styles["demo-card-footer"]}>
        <div className={styles["demo-card-button-secondary"]}>
          <Button variant="secondary" icon={<></>}>
            Cancel
          </Button>
        </div>
        <div className={styles["demo-card-button"]}>
          <Button variant="primary" icon={<></>}>
            Deploy
          </Button>
        </div>
      </CardFooter>
    </Card>
  </>
);
