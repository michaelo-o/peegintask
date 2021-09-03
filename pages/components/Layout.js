import { useState, useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }, props) => {
  const [search, setSearch] = useState("");

  return (
    <div className="layoutcomponent">
      <Navbar search={search} setSearch={setSearch}/>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
