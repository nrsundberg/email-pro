import { Container } from "~/components/wrappers/Container";
import { Link } from "@remix-run/react";

export default function HeroSection() {
  return (
    <div className="relative " id="home">
      <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
      >
        <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
      </div>
      <Container>
        <div className="relative pt-36 ml-auto">
          <div className="text-center mx-auto">
            <h1 className="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">
              Customer support <br />
              <span className="text-primary dark:text-white">redefined.</span>
            </h1>
            <p className="mt-8 text-gray-700 dark:text-gray-300">
              By leveraging AI to preemptively reply to incoming tickets,
              business owners can reclaim valuable time otherwise spent on
              routine inquiries, allowing them to focus on more strategic tasks.
              This approach not only streamlines operations but also fosters a
              perception of genuine, human-like support among customers,
              enhancing satisfaction and loyalty!
            </p>
            <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
              <Link
                to="/create"
                prefetch="intent"
                className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
              >
                <span className="relative text-base font-semibold text-white">
                  Get started
                </span>
              </Link>
              <Link
                to="/documentation"
                prefetch="intent"
                className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
              >
                <span className="relative text-base font-semibold text-primary dark:text-white">
                  Learn more
                </span>
              </Link>
            </div>
            <div className="hidden py-8 mt-16 border-y border-gray-100 dark:border-gray-800 sm:flex justify-between">
              <div className="text-left pr-3">
                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                  Personalized Interaction
                </h6>
                <p className="mt-2 text-gray-500">
                  Unlike AI chatbots that primarily operate through instant
                  messaging platforms, Emailer Pro stands out by managing
                  customer support through email, a preferred communication
                  channel for many users. This personalized approach ensures
                  seamless interactions that cater to customers' preferences and
                  habits.
                </p>
              </div>
              <div className="text-left pr-3">
                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                  Effortless Startup
                </h6>
                <p className="mt-2 text-gray-500">
                  Getting started with Emailer Pro is a breeze, thanks to its
                  intuitive setup process and seamless integration with existing
                  email accounts. Whether it's connecting multiple accounts or
                  configuring settings, Emailer Pro simplifies the onboarding
                  process, enabling businesses to swiftly transition to
                  efficient AI-assisted support.
                </p>
              </div>
              <div className="text-left pr-3">
                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                  Cost-Effective Solution
                </h6>
                <p className="mt-2 text-gray-500">
                  Emailer Pro offers a compelling value proposition with its low
                  pricing model, especially considering the tens or hundreds of
                  hours it saves each month for businesses. By automating
                  repetitive tasks and efficiently handling customer inquiries,
                  Emailer Pro maximizes productivity while minimizing costs,
                  making it an indispensable tool for businesses of all sizes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
