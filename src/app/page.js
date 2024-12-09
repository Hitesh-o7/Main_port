"use client";

import Header from "../components/Header/Header";
import MainPage from "../components/Main/MainPage";
import About from "../components/About/About"; 
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
      <Contact />
      <Analytics />
    </div>
  );
}
