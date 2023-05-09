import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";
import styles from "./Calender.module.scss";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={styles["day-picker"]}
      classNames={{
        months: styles["day-picker-months"],
        month: styles["day-picker-month"],
        caption: styles["day-picker-caption"],
        caption_label: styles["day-picker-caption-label"],
        nav: styles["day-picker-nav"],
        nav_button: styles["day-picker-nav-button"],
        nav_button_previous: styles["day-picker-nav-previous"],
        nav_button_next: styles["day-picker-nav-next"],
        table: styles["day-picker-table"],
        head_row: styles["day-picker-head-row"],
        head_cell: styles["day-picker-head-cell"],
        row: styles["day-picker-row"],
        cell: styles["day-picker-cell"],
        day: styles["day-picker-day"],
        day_selected: styles["day-picker-selected"],
        day_today: styles["day-picker-today"],
        day_outside: styles["day-picker-outside"],
        day_disabled: styles["day-picker-outside"],
        day_range_middle: styles["day-picker-middle"],
        day_hidden: styles["day-picker-hidden"],
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => (
          <ChevronLeft className={styles["day-picker-icon"]} />
        ),
        IconRight: ({ ...props }) => (
          <ChevronRight className={styles["day-picker-icon"]} />
        ),
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
