import outlookLogo from "../../../../public/outlookLogo.png";
import gmailLogo from "../../../../public/gmailIcon.svg.png";
import resova from "../../../../public/resova_logo_main.svg";
import { Container } from "~/components/wrappers/Container";

export default function Integrations() {
  return (
    <div id="integrations" className="my-48">
      <Container>
        <div>
          <div className="md:w-2/3 lg:w-1/2">
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="gold"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M20.3 3.7c.2.2.4.4.4.7.3 1.8.7 5.2-.9 6.8A75.2 75.2 0 0 1 8.6 18a1 1 0 0 1-.6-.3l-.8-.9-1-.8a1 1 0 0 1 0-1.2c1-2.2 4.8-8.9 6.6-10.6 1.6-1.6 5-1.2 6.8-1l.7.5ZM5.4 7.6l4-.4-2.7 4.5-2.8-.3a1 1 0 0 1-.6-1.7l2.1-2.1Zm11.4 7-.4 4-2 2.1a1 1 0 0 1-1.8-.6l-.4-2.8 4.6-2.7Zm.8-6.2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                clipRule="evenodd"
              />
            </svg>

            <h2 className="my-8 text-2xl font-bold text-gray-700 dark:text-white md:text-4xl">
              Streamline your communication to customers and employees
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              With Emailer Pro's seamless integration with Gmail, Outlook, and{" "}
              other business software, you gain robust reporting capabilities{" "}
              and effortless scheduling tools, all while enjoying a{" "}
              straightforward setup process. Our platform provides detailed{" "}
              analytics on customer interactions, empowering you to make{" "}
              informed decisions to improve support strategies. If you require{" "}
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              integration with a software not listed, don't worry—contact us,{" "}
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              and we'll collaborate with you to ensure seamless integration
              tailored to your needs.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6">
            <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
              <img
                src={outlookLogo}
                className="h-12 w-auto mx-auto"
                loading="lazy"
                alt="client logo"
                width=""
                height=""
              />
            </div>
            <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
              <img
                src={gmailLogo}
                className="h-12 w-auto mx-auto"
                loading="lazy"
                alt="client logo"
                width=""
                height=""
              />
            </div>
            <div className="p-4 flex grayscale transition duration-200 hover:grayscale-0">
              <img
                src={resova}
                className="h-9 w-auto m-auto"
                loading="lazy"
                alt="client logo"
                width=""
                height=""
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
