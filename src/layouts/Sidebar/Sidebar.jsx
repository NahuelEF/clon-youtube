import { useContext, useState } from "react";
import { SidebarContext } from "@/contexts";
import { Link } from "react-router-dom";
import uuid from "react-uuid";
import {
  IconBag,
  IconBroadcast,
  IconBroadcastPin,
  IconClothes,
  IconCollectionPlay,
  IconFeedback,
  IconFilm,
  IconFire,
  IconFlag,
  IconGaming,
  IconHelp,
  IconHistory,
  IconHome,
  IconLibrary,
  IconLightbulb,
  IconMusicNote,
  IconNewspaper,
  IconPlus,
  IconSettings,
  IconShorts,
  IconTrophy,
} from "@/assets/icons";
import style from "./Sidebar.module.css";

const Tabs = {
  section1: [
    { id: uuid(), icon: <IconHome />, label: "home" },
    { id: uuid(), icon: <IconShorts />, label: "shorts" },
    { id: uuid(), icon: <IconCollectionPlay />, label: "subscriptions" },
  ],

  section2: [
    { id: uuid(), icon: <IconLibrary />, label: "library" },
    { id: uuid(), icon: <IconHistory />, label: "history" },
  ],

  section3: [
    { id: uuid(), icon: <IconFire />, label: "trending" },
    { id: uuid(), icon: <IconBag />, label: "shopping" },
    { id: uuid(), icon: <IconMusicNote />, label: "music" },
    { id: uuid(), icon: <IconFilm />, label: "movies & TV" },
    { id: uuid(), icon: <IconBroadcast />, label: "live" },
    { id: uuid(), icon: <IconGaming />, label: "gaming" },
    { id: uuid(), icon: <IconNewspaper />, label: "news" },
    { id: uuid(), icon: <IconTrophy />, label: "sports" },
    { id: uuid(), icon: <IconLightbulb />, label: "learning" },
    { id: uuid(), icon: <IconClothes />, label: "fashion & beauty" },
    { id: uuid(), icon: <IconBroadcastPin />, label: "podcasts" },
  ],
  section4: [{ id: uuid(), icon: <IconPlus />, label: "browse channels" }],
  section5: [
    { id: uuid(), icon: <IconSettings />, label: "settings" },
    { id: uuid(), icon: <IconFlag />, label: "report history" },
    { id: uuid(), icon: <IconHelp />, label: "help" },
    { id: uuid(), icon: <IconFeedback />, label: "send feedback" },
  ],
};

const Footer = {
  section1: [
    { id: uuid(), label: "About" },
    { id: uuid(), label: "Press" },
    { id: uuid(), label: "Copyright" },
    { id: uuid(), label: "Contact us" },
    { id: uuid(), label: "Creators" },
    { id: uuid(), label: "Advertise" },
    { id: uuid(), label: "Developers" },
  ],
  section2: [
    { id: uuid(), label: "Terms" },
    { id: uuid(), label: "Privacy" },
    { id: uuid(), label: "Policy & Safety" },
    { id: uuid(), label: "How YouTube works" },
    { id: uuid(), label: "Test new features" },
  ],
};

export const Sidebar = () => {
  const [activeTab, setActiveTab] = useState("home");
  const { openSidebar } = useContext(SidebarContext);

  const handleClick = (label) => {
    setActiveTab(label);
  };

  return (
    <div className={`${style.sidebar} ${!openSidebar ? style.sidebarClose : ""}`}>
      <nav className={style.nav}>
        <Section listItems={Tabs.section1} onClick={handleClick} selected={activeTab} />
        <Section listItems={Tabs.section2} onClick={handleClick} selected={activeTab} />
        <Section listItems={Tabs.section3} onClick={handleClick} selected={activeTab} title="Explore" />
        <Section listItems={Tabs.section4} onClick={handleClick} selected={activeTab} />
        <Section listItems={Tabs.section5} onClick={handleClick} selected={activeTab} />
      </nav>
      <div className={style.footer}>
        <div className={style.footerSection}>
          {Footer.section1.map(({ id, label }) => (
            <Link key={id} className={style.footerSpan} to={"/"}>
              {label}
            </Link>
          ))}
        </div>
        <div className={style.footerSection}>
          {Footer.section2.map(({ id, label }) => (
            <Link key={id} className={style.footerSpan} to={"/"}>
              {label}
            </Link>
          ))}
        </div>
        <strong className={`${style.footerSpan} ${style.footerStrong}`}>© 2023 NahuelEF</strong>
      </div>
    </div>
  );
};

const Section = ({ title, listItems, onClick, selected }) => (
  <ul className={style.navSection}>
    {title && (
      <li>
        <h2 className={style.navTitle}>{title}</h2>
      </li>
    )}
    {listItems.map((item) => (
      <li key={item.id}>
        <Link
          className={`${style.navItem} ${selected === item.label ? style.active : ""}`}
          to={"/"}
          onClick={() => onClick(item.label)}
        >
          {item.icon && <span className={style.navIcon}>{item.icon}</span>}
          {item.label}
        </Link>
      </li>
    ))}
  </ul>
);
