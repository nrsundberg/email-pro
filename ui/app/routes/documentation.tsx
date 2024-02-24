import type { MetaFunction } from "@remix-run/node";

import Header from "pages/app/Header";
import SideBar from "pages/docs/SideBar";
import Footer from "pages/app/Footer";
import { AppPage, PageMainContent } from "wrappers/App";

import Topic from "~/routes/documentation.$topic";

export const meta: MetaFunction = () => {
  return [
    { title: "Docs - Emailer Pro" },
    { name: "description", content: "Documentation about Emailer Pro." }
  ];
};

export default function RouterComponent() {
  return (
    <AppPage>
      <Header />
      <PageMainContent>
        <div className="grid grid-cols-2 text-left mb-40">
          <SideBar />
          {/*TODO make this nested route loading by query param*/}
          <Topic />
        </div>
      </PageMainContent>

      <Footer />
    </AppPage>
  );
}
