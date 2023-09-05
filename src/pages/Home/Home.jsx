import { useContext } from "react";
import uuid from "react-uuid";
import { SidebarContext } from "@/contexts";
import { Filter, VideoList } from "./components";

import style from "./Home.module.css";

const Tablist = [
  {
    id: uuid(),
    text: "All",
  },
  {
    id: uuid(),
    text: "Live",
  },
  {
    id: uuid(),
    text: "News",
  },
  {
    id: uuid(),
    text: "Music",
  },
  {
    id: uuid(),
    text: "Meditation music",
  },
  {
    id: uuid(),
    text: "Chill-out music",
  },
  {
    id: uuid(),
    text: "Gaming",
  },
  {
    id: uuid(),
    text: "Jazz",
  },
  {
    id: uuid(),
    text: "Comedy",
  },
  {
    id: uuid(),
    text: "Action-adventure games",
  },
  {
    id: uuid(),
    text: "Pop Music",
  },
  {
    id: uuid(),
    text: "Recently uploaded",
  },
  {
    id: uuid(),
    text: "Soundtracks",
  },
  {
    id: uuid(),
    text: "Track and field",
  },
];

const videos = [
  {
    id: uuid(),
    thumbnail: "",
    duration: "53:21",
    avatar: "",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    channelName: "Lorem",
    verified: true,
    views: "6.7K",
    updateTime: "16 hours",
  },
  {
    id: uuid(),
    thumbnail: "",
    duration: "53:21",
    avatar: "",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    channelName: "Lorem",
    verified: true,
    views: "6.7K",
    updateTime: "16 hours",
  },
  {
    id: uuid(),
    thumbnail: "",
    duration: "53:21",
    avatar: "",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    channelName: "Lorem",
    verified: true,
    views: "6.7K",
    updateTime: "16 hours",
  },
  {
    id: uuid(),
    thumbnail: "",
    duration: "53:21",
    avatar: "",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    channelName: "Lorem",
    verified: true,
    views: "6.7K",
    updateTime: "16 hours",
  },
  {
    id: uuid(),
    thumbnail: "",
    duration: "53:21",
    avatar: "",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    channelName: "Lorem",
    verified: true,
    views: "6.7K",
    updateTime: "16 hours",
  },
  {
    id: uuid(),
    thumbnail: "",
    duration: "53:21",
    avatar: "",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    channelName: "Lorem",
    verified: true,
    views: "6.7K",
    updateTime: "16 hours",
  },
];

export const Home = () => {
  const { openSidebar } = useContext(SidebarContext);

  return (
    <main className={style.main} style={{ marginLeft: `${openSidebar ? "15rem" : "4.5rem"}` }}>
      <Filter items={Tablist} />
      <VideoList videos={videos} />
    </main>
  );
};
