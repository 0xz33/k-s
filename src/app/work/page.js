import SidePane from "@/components/Sidepane";
import WorkContent from "@/components/WorkContent";
import s from "../page.module.scss";
import HomeLayout from "../homeLayout";
import HomeContent from "@/components/HomeContent";
import RootLayout from "../layout";

export default function work() {
  return (
    <RootLayout>
      <HomeContent />
    </RootLayout>
  );
}
