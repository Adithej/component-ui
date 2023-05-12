import Input from "@/component/Input";
import styles from "./styles/Search.module.scss";

export function Search() {
  return (
    <div className={styles["search-span"]}>
      <Input
        type="search"
        placeholder="Search..."
        id={""} // className="h-9 md:w-[100px] lg:w-[300px]"
      />
    </div>
  );
}
