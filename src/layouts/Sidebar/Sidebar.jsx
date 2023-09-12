import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { SidebarContext } from "@/contexts";
import style from "./Sidebar.module.css";
import { NAV_TABS, FOOTER_TEXTS } from "./constants";

export const Sidebar = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const { openSidebar } = useContext(SidebarContext);

  const navSections = Object.keys(NAV_TABS);
  const footerSections = Object.keys(FOOTER_TEXTS);

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <aside className={`${style.sidebar} ${!openSidebar ? style.sidebarClose : ""}`}>
      <Nav>
        {navSections.map((section) => (
          <Nav.Section key={section}>
            {NAV_TABS[section].map((tab) => (
              <li key={tab.id}>
                {tab.title ? (
                  <Nav.Title>{tab.title}</Nav.Title>
                ) : (
                  <Nav.Tab tab={tab} selected={activeTab} onClick={handleClick} />
                )}
              </li>
            ))}
          </Nav.Section>
        ))}
      </Nav>
      {openSidebar ? (
        <Footer>
          {footerSections.map((section) => (
            <Footer.Section key={section}>
              {FOOTER_TEXTS[section].map(({ id, text }) => (
                <Link key={id} className={style.footerSpan} to={"/"}>
                  {text}
                </Link>
              ))}
            </Footer.Section>
          ))}

          <strong className={`${style.footerSpan} ${style.footerStrong}`}>© 2023 NahuelEF</strong>
        </Footer>
      ) : null}
    </aside>
  );
};

const Nav = ({ children }) => <nav className={style.nav}>{children}</nav>;

const NavSection = ({ children }) => <ul className={style.navSection}>{children}</ul>;

const NavTitle = ({ children }) => <h2 className={style.navTitle}>{children}</h2>;

const NavTab = ({ tab: { label, icon }, selected, onClick }) => {
  const isSelected = selected === label;

  return (
    <Link
      className={`${style.navItem} ${isSelected ? style.active : ""}`}
      to={"/"}
      onClick={() => onClick(label)}
      title={label}
    >
      {icon ? <span className={style.navIcon}>{icon(isSelected)}</span> : null}
      {label}
    </Link>
  );
};

const Footer = ({ children }) => <footer className={style.footer}>{children}</footer>;
const FooterSection = ({ children }) => <div className={style.footerSection}>{children}</div>;

Nav.Section = NavSection;
Nav.Title = NavTitle;
Nav.Tab = NavTab;

Footer.Section = FooterSection;
