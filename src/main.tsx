import React from "react";
import ReactDOM from "react-dom/client";
import "./global.scss";
import PWABadge from "@/components/ui/pwa-badge/PWABadge";
import Home from "@/pages/home/Home";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Home />
    <PWABadge />
  </React.StrictMode>,
);
