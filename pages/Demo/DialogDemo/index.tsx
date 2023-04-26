import Button from "@/component/Button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/component/Dialog";
import Input from "@/component/Input";
import styles from "/Users/mozilor/Desktop/assignment/component-ui/component-ui/component/Dialog/Dialog.module.scss";

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" icon={<></>}>
          Edit Profile
        </Button>
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
  );
}
