import { Link } from "@remix-run/react";
import { Divider } from "@nextui-org/react";
import { camelCaseToUserFacingName } from "~/components/appUtils";

export default function SideBar() {
  const menuOptions = {
    startHere: [
      "Quick Start (10 min)",
      "Customization",
      "From Email to Response",
      "RAG Based AI"
    ],
    languageModeling: ["LLM", "context", "RAG-in-depth"],
    questions: ["FAQ's", "Contact Us"]
  };

  return (
    <div className="h-90vh w-fit justify-between">
      {Object.entries(menuOptions).map((grp) => {
        return (
          <div key={grp[0]} className="space-y-1 mb-10">
            <h4 className="text-medium font-medium">
              {camelCaseToUserFacingName(grp[0])}
            </h4>
            <Divider />
            <ul>
              {grp[1].map((tle) => (
                <li key={tle}>
                  <Link
                    prefetch="intent"
                    className="hover:underline"
                    to={`/documentation/${tle}`}
                  >
                    {tle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );

  // );
}
