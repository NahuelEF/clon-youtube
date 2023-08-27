import { useState } from "react";
import { IconSearch, IconClose } from "@/assets/icons/HeaderIcons";
import { IconButton } from "../IconButton/IconButton";
import style from "./Search.module.css";

export const Search = () => {
  const [text, setText] = useState("");

  return (
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
  );
};
