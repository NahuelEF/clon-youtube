import { createContext, useState } from "react";

export const SidebarContext = createContext(null);

export const UseSidebarContext = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(true);
  return <SidebarContext.Provider value={{ openSidebar, setOpenSidebar }}>{children}</SidebarContext.Provider>;
};
