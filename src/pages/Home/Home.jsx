import { useContext } from "react";
import { SidebarContext } from "@/contexts";
import { Filter, VideoList } from "./components";
import { FILTER_TABS, VIDEOS } from "./constants";
import style from "./Home.module.css";

export const Home = () => {
  const { openSidebar } = useContext(SidebarContext);

  return (
    <main className={style.main} style={{ marginLeft: `${openSidebar ? "15rem" : "4.5rem"}` }}>
      <Filter items={FILTER_TABS} />
      <VideoList videos={VIDEOS} />
    </main>
  );
};
