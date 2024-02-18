import type { MetaFunction } from "@remix-run/node";
import Header from "~/components/Header";

export const meta: MetaFunction = () => {
  return [
    { title: "Docs - Emailer Pro" },
    { name: "description", content: "Documentation about Emailer Pro." }
  ];
};

export default function App() {
  return (
    <>
      <Header />
      <div className="dark h-100lvh">
        <h4>Docs page</h4>
      </div>
    </>
  );
}
