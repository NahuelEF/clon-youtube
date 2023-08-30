import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SidebarContext } from "./contexts";
import { Header, Sidebar } from "./layouts";
import { Home } from "./pages";

function App() {
  const [openSidebar, setOpenSidebar] = useState(true);

  return (
    <SidebarContext.Provider value={{ openSidebar, setOpenSidebar }}>
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </SidebarContext.Provider>
  );
}

export default App;
