import { useRef, useState } from "react";
import { IconButton } from "@/components";
import { IconLeftRow, IconRightRow } from "@/assets/icons";
import style from "./Filter.module.css";

export const Filter = ({ items }) => {
  let scroll = useRef(null);
  const [scrollX, setScrollX] = useState(0);
  const [scrollEnd, setScrollEnd] = useState(false);
  const [activeTab, setActiveTab] = useState(items[0].text);

  const handleSlide = (shift) => {
    const scrollElement = scroll.current;
    const hasReachedEnd = Math.floor(scrollElement.scrollWidth - scrollElement.scrollLeft) <= scrollElement.offsetWidth;

    scrollElement.scrollLeft += shift;

    setScrollX(scrollX + shift);
    setScrollEnd(hasReachedEnd);
  };

  const scrollCheck = () => {
    const scrollElement = scroll.current;
    const scrollLeft = scrollElement.scrollLeft;
    const hasReachedEnd = Math.floor(scrollElement.scrollWidth - scrollLeft) <= scrollElement.offsetWidth;

    setScrollX(scrollLeft);
    setScrollEnd(hasReachedEnd);
  };

  return (
    <div className={style.filter}>
      {scrollX !== 0 && (
        <IconButton
          icon={<IconLeftRow />}
          label="Left row"
          className={style.buttonLeft}
          onClick={() => handleSlide(-250)}
        />
      )}
      <ul className={style.tablist} ref={scroll} onScroll={scrollCheck}>
        {items.map((tab) => (
          <li
            key={tab.id}
            className={`${style.tab} ${activeTab === tab.text ? style.active : ""}`}
            title={tab.text}
            onClick={() => setActiveTab(tab.text)}
          >
            {tab.text}
          </li>
        ))}
      </ul>
      {!scrollEnd && (
        <IconButton
          icon={<IconRightRow />}
          label="Right row"
          className={style.buttonRight}
          onClick={() => handleSlide(250)}
        />
      )}
    </div>
  );
};
