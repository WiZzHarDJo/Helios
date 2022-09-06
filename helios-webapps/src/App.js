import React from "react";
import "./App.css";
import Routes from "./routes";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes />
    </AnimatePresence>
  );
}

export default App;
