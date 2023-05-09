import { Avatar, AvatarFallback, AvatarImage } from "@/component/Avatar";
import styles from "./styles/RecentSales.module.scss";

export function RecentSales() {
  return (
    <div className={styles["sales-root"]}>
      <div className={styles["sales-container"]}>
        <Avatar className={styles["sales-avatar-one"]}>
          <AvatarImage
            src="component-ui/pages/Dashboard/Avatars/01.png"
            alt="Avatar"
          />
          <AvatarFallback>OM</AvatarFallback>
        </Avatar>
        <div className={styles["sales-description"]}>
          <p className={styles["sales-item-one"]}>Olivia Martin</p>
          <p className={styles["sales-item-two"]}>olivia.martin@email.com</p>
        </div>
        <div className={styles["sales-item-price"]}>+$1,999.00</div>
      </div>
      <div className={styles["sales-container"]}>
        <Avatar className={styles["sales-avatar-two"]}>
          <AvatarImage
            src="component-ui/pages/Dashboard/Avatars/02.png"
            alt="Avatar"
          />
          <AvatarFallback>JL</AvatarFallback>
        </Avatar>
        <div className={styles["sales-description"]}>
          <p className={styles["sales-item-one"]}>Jackson Lee</p>
          <p className={styles["sales-item-two"]}>jackson.lee@email.com</p>
        </div>
        <div className={styles["sales-item-price"]}>+$39.00</div>
      </div>
      <div className={styles["sales-container"]}>
        <Avatar className={styles["sales-avatar-one"]}>
          <AvatarImage
            src="component-ui/pages/Dashboard/Avatars/03.png"
            alt="Avatar"
          />
          <AvatarFallback>IN</AvatarFallback>
        </Avatar>
        <div className={styles["sales-description"]}>
          <p className={styles["sales-item-one"]}>Isabella Nguyen</p>
          <p className={styles["sales-item-two"]}>isabella.nguyen@email.com</p>
        </div>
        <div className={styles["sales-item-price"]}>+$299.00</div>
      </div>
      <div className={styles["sales-container"]}>
        <Avatar className={styles["sales-avatar-one"]}>
          <AvatarImage
            src="component-ui/pages/Dashboard/Avatars/04.png"
            alt="Avatar"
          />
          <AvatarFallback>WK</AvatarFallback>
        </Avatar>
        <div className={styles["sales-description"]}>
          <p className={styles["sales-item-one"]}>William Kim</p>
          <p className={styles["sales-item-two"]}>will@email.com</p>
        </div>
        <div className={styles["sales-item-price"]}>+$99.00</div>
      </div>
      <div className={styles["sales-container"]}>
        <Avatar className={styles["sales-avatar-one"]}>
          <AvatarImage
            src="component-ui/pages/Dashboard/Avatars/05.png"
            alt="Avatar"
          />
          <AvatarFallback>SD</AvatarFallback>
        </Avatar>
        <div className={styles["sales-description"]}>
          <p className={styles["sales-item-one"]}>Sofia Davis</p>
          <p className={styles["sales-item-two"]}>sofia.davis@email.com</p>
        </div>
        <div className={styles["sales-item-price"]}>+$39.00</div>
      </div>
    </div>
  );
}
