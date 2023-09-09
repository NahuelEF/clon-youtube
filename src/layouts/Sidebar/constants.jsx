import {
  IconBroadcast,
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
import uuid from "react-uuid";

export const NAV_TABS = {
  section1: [
    { id: uuid(), icon: (isSelected) => <IconHome fill={isSelected} />, label: "Home" },
    { id: uuid(), icon: (isSelected) => <IconShorts fill={isSelected} />, label: "Shorts" },
    { id: uuid(), icon: (isSelected) => <IconCollectionPlay fill={isSelected} />, label: "Subscriptions" },
  ],

  section2: [
    { id: uuid(), icon: (isSelected) => <IconLibrary fill={isSelected} />, label: "Library" },
    { id: uuid(), icon: (isSelected) => <IconHistory fill={isSelected} />, label: "History" },
  ],

  section3: [
    { id: uuid(), title: "Explore" },
    { id: uuid(), icon: (isSelected) => <IconFire fill={isSelected} />, label: "Trending" },
    { id: uuid(), icon: (isSelected) => <IconMusicNote fill={isSelected} />, label: "Music" },
    { id: uuid(), icon: (isSelected) => <IconFilm fill={isSelected} />, label: "Movies & TV" },
    { id: uuid(), icon: (isSelected) => <IconBroadcast fill={isSelected} />, label: "Live" },
    { id: uuid(), icon: (isSelected) => <IconGaming fill={isSelected} />, label: "Gaming" },
    { id: uuid(), icon: (isSelected) => <IconNewspaper fill={isSelected} />, label: "News" },
    { id: uuid(), icon: (isSelected) => <IconTrophy fill={isSelected} />, label: "Sports" },
    { id: uuid(), icon: (isSelected) => <IconLightbulb fill={isSelected} />, label: "Learning" },
    { id: uuid(), icon: (isSelected) => <IconClothes fill={isSelected} />, label: "Fashion & beauty" },
  ],
  section4: [{ id: uuid(), icon: (isSelected) => <IconPlus fill={isSelected} />, label: "Browse channels" }],
  section5: [
    { id: uuid(), icon: (isSelected) => <IconSettings fill={isSelected} />, label: "settings" },
    { id: uuid(), icon: (isSelected) => <IconFlag fill={isSelected} />, label: "Report history" },
    { id: uuid(), icon: (isSelected) => <IconHelp fill={isSelected} />, label: "Help" },
    { id: uuid(), icon: (isSelected) => <IconFeedback fill={isSelected} />, label: "Send feedback" },
  ],
};

export const FOOTER_TEXTS = {
  section1: [
    { id: uuid(), text: "About" },
    { id: uuid(), text: "Press" },
    { id: uuid(), text: "Copyright" },
    { id: uuid(), text: "Contact us" },
    { id: uuid(), text: "Creators" },
    { id: uuid(), text: "Advertise" },
    { id: uuid(), text: "Developers" },
  ],
  section2: [
    { id: uuid(), text: "Terms" },
    { id: uuid(), text: "Privacy" },
    { id: uuid(), text: "Policy & Safety" },
    { id: uuid(), text: "How YouTube works" },
    { id: uuid(), text: "Test new features" },
  ],
};
