import type { MetaFunction } from "@remix-run/node";
import Header from "~/components/Header";
import HeroSection from "~/components/pages/landing/HeroSection";
import Features from "~/components/pages/landing/Features";
import Footer from "~/components/Footer";
import Integrations from "~/components/pages/landing/Integrations";

export const meta: MetaFunction = () => {
  return [
    { title: "Emailer Pro" },
    { name: "description", content: "Welcome to Emailer Pro!" }
  ];
};

export default function App() {
  return (
    <>
      <Header />
      <div className="dark">
        <HeroSection />
        <Features />
        <Integrations />
      </div>
      <Footer />
    </>
  );
}
