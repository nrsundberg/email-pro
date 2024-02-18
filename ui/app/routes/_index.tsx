import type { MetaFunction } from "@remix-run/node";
import Header from "~/components/Header";

export const meta: MetaFunction = () => {
  return [
    { title: "Emailer Pro" },
    { name: "description", content: "Welcome to Emailer Pro!" },
  ];
};

export default function App() {
  return (
    <>
      <Header />
      <div className="flex w-100 h-lvh dark grid grid-cols-2 gap-4"></div>
    </>
  );
}
