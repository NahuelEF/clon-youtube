import { useState } from "react";
import { IconClose, IconDot, IconList, IconMicrophone, IconPerson, IconSearch } from "@/assets/icons";
import style from "./Header.module.css";

export const Header = () => {
  const [text, setText] = useState("");

  return (
    <header className={style.header}>
      <div className={style.start}>
        <IconButton icon={<IconList />} label="Menu" />
        <h1 className={style.startLogo}>YouTube</h1>
      </div>

      <div className={style.center}>
        <form className={style.search} onSubmit={(e) => e.preventDefault()}>
          <div className={style.searchContainer}>
            <input
              className={style.searchInput}
              type="text"
              placeholder="Search"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />

            {text && <IconButton icon={<IconClose />} label="Delete all" onClick={() => setText("")} />}
          </div>
          <button className={style.searchButton} type="submit" aria-label="Search">
            <IconSearch />
          </button>
        </form>
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

const IconButton = ({ icon, type = "button", isFill = false, label, onClick }) => (
  <button
    className={`${style.iconButton} ${isFill ? style.fill : ""}`}
    type={type}
    aria-label={label}
    onClick={onClick}
  >
    {icon}
  </button>
);
