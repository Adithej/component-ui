import * as React from "react";
import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";
// import Button from "@/component/Button";
import { Calendar } from "@/component/Calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/component/Popover";
import styles from "./styles/CalendarDateRangePicker.module.scss";

export function CalendarDateRangePicker({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2023, 0, 20),
    to: addDays(new Date(2023, 0, 20), 20),
  });

  return (
    <div className={styles["range-picker"]}>
      <Popover>
        <PopoverTrigger asChild>
          <button
            id="date"
            className={
              `${styles["range-picker-button"]},
              ${!date} ` && ` ${styles["range-picker-foreground"]}`
            }
          >
            <CalendarIcon className={styles["calender-icon"]} />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </button>
        </PopoverTrigger>
        <PopoverContent className={styles["range-popover-content"]} align="end">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
