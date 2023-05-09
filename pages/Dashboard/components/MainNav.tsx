import Link from "next/link";
import styles from "./styles/MainNav.module.scss";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav className={styles["navigation-list"]} {...props}>
      <Link
        href="/examples/dashboard"
        className={styles["navigation-overview"]}
      >
        Overview
      </Link>
      <Link
        href="/examples/dashboard"
        className={styles["navigation-overview-list"]}
      >
        Customers
      </Link>
      <Link
        href="/examples/dashboard"
        className={styles["navigation-overview-list"]}
      >
        Products
      </Link>
      <Link
        href="/examples/dashboard"
        className={styles["navigation-overview-list"]}
      >
        Settings
      </Link>
    </nav>
  );
}
