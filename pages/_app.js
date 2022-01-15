import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import "../styles/globals.css";
import "@fontsource/inter/variable.css";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function MyApp({ Component, pageProps }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div id="app" className="flex">
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ x: -240 }}
            animate={{ x: 0 }}
            exit={{ x: -240 }}
          >
            <Sidebar />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="w-full px-6 transition-all">
        <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
