import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UseSidebarContext } from "./contexts";
import { Header, Sidebar } from "./layouts";
import { Home } from "./pages";

function App() {
  return (
    <UseSidebarContext>
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </UseSidebarContext>
  );
}

export default App;
