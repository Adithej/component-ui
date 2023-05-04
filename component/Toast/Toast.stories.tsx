import { Meta } from "@storybook/react";
import * as React from "react";
import * as Toast from "@radix-ui/react-toast";
import styles from "./Toast.module.scss";
import Button from "../Button";
import { X } from "lucide-react";

const meta: Meta<typeof Toast> = {
  title: "Componenets/Toast",
  // component: Toast,
};

export default meta;

export function ToastDemo() {
  const [open, setOpen] = React.useState(false);
  const eventDateRef = React.useRef(new Date());
  const timerRef = React.useRef(0);

  React.useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <>
      <Toast.Provider swipeDirection="right">
        <Button
          variant="secondary"
          onClick={() => {
            setOpen(false);
            window.clearTimeout(timerRef.current);
            timerRef.current = window.setTimeout(() => {
              eventDateRef.current = oneWeekAway(11 / 11 / 2022);
              setOpen(true);
            }, 100);
          }}
          icon={undefined}
        >
          Add to calendar
        </Button>

        <Toast.Root
          className={styles["toast-root"]}
          open={open}
          onOpenChange={setOpen}
        >
          <Toast.Title className={styles["toast-title"]}>
            Scheduled: Catch up
          </Toast.Title>
          <Toast.Description asChild>
            <time
              className={styles["toast-description"]}
              dateTime={eventDateRef.current.toISOString()}
            >
              {prettyDate(eventDateRef.current)}
            </time>
          </Toast.Description>
          <Toast.Action
            className={styles["toast-action"]}
            asChild
            altText="Goto schedule to undo"
          >
            <div>
              <X className={styles["toast-close"]} />
              <Button variant="secondary" icon={undefined}>
                Undo
              </Button>
            </div>
          </Toast.Action>
        </Toast.Root>
        <Toast.Viewport className="toast-viewport" />
      </Toast.Provider>
    </>
  );
}

function oneWeekAway(date: number) {
  const now = new Date();
  const inOneWeek = now.setDate(now.getDate() + 7);
  return new Date(inOneWeek);
}

function prettyDate(date: number | Date | undefined) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "short",
  }).format(date);
}
