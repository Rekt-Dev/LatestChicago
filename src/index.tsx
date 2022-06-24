import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { HoverCard } from "./components/HoverCard";

import { GoToArtist } from "./components/GoToArtist";
import { OpenCard } from "./components/OpenCard";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="gotoartist" element={<GoToArtist />} />
        <Route path="opencard" element={<OpenCard />} />
        <Route path="hovercard" element={<HoverCard />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
