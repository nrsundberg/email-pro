import type { MetaFunction } from "@remix-run/node";
import Header from "~/components/pages/app/Header";
import SideBar from "~/components/pages/docs/SideBar";
import GeneralAppPage from "~/components/wrappers/GeneralAppPage";
import Footer from "~/components/pages/app/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "Docs - Emailer Pro" },
    { name: "description", content: "Documentation about Emailer Pro." }
  ];
};

export default function RouterComponent() {
  return (
    <div className="h-screen">
      <Header />
      <GeneralAppPage>
        <div className="grid grid-cols-2 text-left mb-40">
          <SideBar />
          {/*TODO make this nested route loading by query param*/}
          <h4>Docs page</h4>
        </div>
      </GeneralAppPage>
      <Footer />
    </div>
  );
}
