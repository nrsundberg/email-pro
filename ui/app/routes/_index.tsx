import type { MetaFunction } from "@remix-run/node";

import { AppPage } from "wrappers/App";

import Header from "pages/app/Header";
import HeroSection from "pages/landing/HeroSection";
import Features from "pages/landing/Features";
import Footer from "pages/app/Footer";
import Integrations from "pages/landing/Integrations";

export const meta: MetaFunction = () => {
  return [
    { title: "Emailer Pro" },
    { name: "description", content: "Welcome to Emailer Pro!" }
  ];
};

export default function App() {
  return (
    <AppPage>
      <Header />
      <HeroSection />
      <Features />
      <Integrations />
      <Footer />
    </AppPage>
  );
}
