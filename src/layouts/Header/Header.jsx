import { IconDot, IconList, IconMicrophone, IconPerson } from "@/assets/icons";
import { IconButton, Search } from "@/components";
import style from "./Header.module.css";

export const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.start}>
        <IconButton icon={<IconList />} label="Menu" />
        <h1 className={style.startLogo}>YouTube</h1>
      </div>

      <div className={style.center}>
        <Search />
        <IconButton icon={<IconMicrophone />} isFill={true} label="Voice search" />
      </div>

      <div className={style.end}>
        <IconButton icon={<IconDot />} label="Settings" />
        <div className={style.account}>
          <span className={style.accountIcon}>
            <IconPerson />
          </span>
          <strong className={style.accountLabel}>Sign in</strong>
        </div>
      </div>
    </header>
  );
};
