import { Metadata } from "next";
import Image from "next/image";
import {
  Activity,
  CreditCard,
  DollarSign,
  Download,
  Users,
} from "lucide-react";

import Button from "@/component/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/component/CardForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/component/Tabs";
import { CalendarDateRangePicker } from "./components/CalendarDateRangePicker";
import { MainNav } from "./components/MainNav";
import { Overview } from "./components/Overview";
import { RecentSales } from "./components/RecentSales";
import { Search } from "./components/Search";
import TeamSwitcher from "./components/TeamSwitcher";
import { UserNav } from "./components/UserNav";
import styles from "./Dashboard.module.scss";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app using the components.",
};

export default function Dashboard() {
  return (
    <>
      <div className={styles["dashboard"]}>
        <Image
          src="/examples/dashboard-light.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="block dark:hidden"
        />
        <Image
          src="/examples/dashboard-dark.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="hidden dark:block"
        />
      </div>
      <div className={styles["dashboard-teamswitcher"]}>
        <div className={styles["dashboard-teamswitcher-navs"]}>
          <div className={styles["dashboard-teamswitcher-nav"]}>
            <TeamSwitcher />
            <MainNav className={styles["dashboard-main-nav"]} />
            <div className={styles["dashboard-nav-search"]}>
              <Search />
              <UserNav />
            </div>
          </div>
        </div>
        <div className={styles["dashboard-calender"]}>
          <div className={styles["dashboard-calender-picker"]}>
            <h2 className={styles["dashboard-calender-head"]}>Dashboard</h2>
            <div className={styles["dashboard-calender-range"]}>
              <CalendarDateRangePicker />
              <div className={styles["dashboard-picker-button"]}>
                <Button icon={<></>}>
                  <Download className={styles["dashboard-download"]} />
                  Download
                </Button>
              </div>
            </div>
          </div>
          <Tabs defaultValue="overview" className={styles["dashboard-tab"]}>
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics" disabled>
                Analytics
              </TabsTrigger>
              <TabsTrigger value="reports" disabled>
                Reports
              </TabsTrigger>
              <TabsTrigger value="notifications" disabled>
                Notifications
              </TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className={styles["dashboard-tab"]}>
              <div className={styles["dashboard-tab-content"]}>
                <Card>
                  <CardHeader className={styles["dashboard-card-head"]}>
                    <CardTitle className={styles["dashboard-card-title"]}>
                      Total Revenue
                    </CardTitle>
                    <DollarSign
                      className={styles["dashboard-card-descripton"]}
                    />
                  </CardHeader>
                  <CardContent>
                    <div className={styles["dashboard-card-content"]}>
                      $45,231.89
                    </div>
                    <p className={styles["dashboard-card-para"]}>
                      +20.1% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className={styles["dashboard-card-head"]}>
                    <CardTitle className={styles["dashboard-card-title"]}>
                      Subscriptions
                    </CardTitle>
                    <Users className={styles["dashboard-card-descripton"]} />
                  </CardHeader>
                  <CardContent>
                    <div className={styles["dashboard-card-content"]}>
                      +2350
                    </div>
                    <p className={styles["dashboard-card-para"]}>
                      +180.1% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className={styles["dashboard-card-head"]}>
                    <CardTitle className={styles["dashboard-card-title"]}>
                      Sales
                    </CardTitle>
                    <CreditCard
                      className={styles["dashboard-card-descripton"]}
                    />
                  </CardHeader>
                  <CardContent>
                    <div className={styles["dashboard-card-content"]}>
                      +12,234
                    </div>
                    <p className={styles["dashboard-card-para"]}>
                      +19% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className={styles["dashboard-card-head"]}>
                    <CardTitle className={styles["dashboard-card-title"]}>
                      Active Now
                    </CardTitle>
                    <Activity className={styles["dashboard-card-descripton"]} />
                  </CardHeader>
                  <CardContent>
                    <div className={styles["dashboard-card-content"]}>+573</div>
                    <p className={styles["dashboard-card-para"]}>
                      +201 since last hour
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className={styles["dashboard-card-grid"]}>
                <Card className={styles["dashboard-card-column"]}>
                  <CardHeader>
                    <CardTitle>Overview</CardTitle>
                  </CardHeader>
                  <CardContent className={styles["dashboard-card-contents"]}>
                    <Overview />
                  </CardContent>
                </Card>
                <Card className={styles["dashboard-card-column-two"]}>
                  <CardHeader>
                    <CardTitle>Recent Sales</CardTitle>
                    <CardDescription>
                      You made 265 sales this month.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RecentSales />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
