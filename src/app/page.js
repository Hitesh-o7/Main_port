"use client";

import Header from "../components/Header/Header";
import MainPage from "../components/Main/MainPage";
import About from "../components/About/About";
import Galleries from "../components/Galleries/Galleries";
import Contact from "../components/Contact/Contact";
import Work from "../components/WorkArt/Work";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  return (
    <div className="home-container">
      <Header />
      <MainPage />
      <About />
      <Work />
      {/* <Galleries /> */}
      <Contact />
      <Analytics />
    </div>
  );
}
