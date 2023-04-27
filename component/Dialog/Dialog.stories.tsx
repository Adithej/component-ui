import { Meta, StoryObj } from "@storybook/react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "./Dialog";
import Button from "../Button";
import Input from "../Input";
import styles from "./Dialog.module.scss";

const meta: Meta<typeof Dialog> = {
  title: "Componenets/Dialog",
  component: Dialog,
};

export default meta;

export const Default = () => (
  <>
    <Dialog>
      <DialogTrigger asChild>
        <div className={styles["demo-dialog-button"]}>
          <Button variant="secondary" icon={<></>}>
            Edit Profile
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent className={styles["demo-dialog-content"]}>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className={styles["demo-dialog-names"]}>
          <div className={styles["demo-dialog-name"]}>
            <label htmlFor="name" className={styles["demo-dialog-label"]}>
              Name
            </label>
            <div className={styles["demo-dialog-input"]}>
              <Input
                id="name"
                value="Pedro Duarte"
                type={""}
                placeholder={""}
              />
            </div>
          </div>
          <div className={styles["demo-dialog-name"]}>
            <label htmlFor="username" className={styles["demo-dialog-label"]}>
              Username
            </label>
            <div className={styles["demo-dialog-input"]}>
              <Input
                id="username"
                value="@peduarte"
                type={""}
                placeholder={""}
              />
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="primary" icon={<></>}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </>
);
