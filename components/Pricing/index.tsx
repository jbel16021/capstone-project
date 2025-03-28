"use client";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";


const Pricing = () => {
  return (
    <>
      <section className="overflow-hidden pb-20 pt-15 lg:pb-25 xl:pb-30" id="pricing">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              headerInfo={{
                title: `PRICING PLANS`,
                subtitle: `Simple Pricing`,
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.`,
              }}
            />
          </div>
        </div>

        <div className="relative mx-auto mt-15 max-w-[1207px] px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="absolute -bottom-15 -z-1 h-full w-full">
          </div>
          <div className="flex flex-wrap justify-center gap-7.5 lg:flex-nowrap xl:gap-12.5">
            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
              <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                $10 USD{" "}
                <span className="text-regular text-waterloo dark:text-manatee">
                  /month
                </span>
              </h3>
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                Private Facebook Group Access
              </h4>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Exclusive Content: Gain access to premium workout plans, nutrition guides, and expert tips that are only available to members of the group.
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Personalized Support: Get direct feedback and advice from me, along with a supportive community of like-minded individuals on the same fitness journey.
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Community Connection: Connect with others who share your goals, exchange tips, and celebrate successes together in a positive and encouraging environment.
                  </li>
                </ul>
              </div>

              <button
                aria-label="Get the Plan button"
                className="group inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white"
                onClick={() => { window.open("https://buy.stripe.com/test_dR68xy64e87AckofZ0", "_blank", "noopener,noreferrer"); }}
              >
                <span className="duration-300 group-hover:text-purple-500">
                  Get the Plan
                </span>
              </button>
            </div>

            {/* <!-- Pricing Item --> */}
            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
              <div className="absolute -right-3.5 top-7.5 -rotate-90 rounded-bl-full rounded-tl-full bg-primary px-4.5 py-1.5 text-metatitle font-medium uppercase text-white">
                popular
              </div>
              <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                $59 USD{" "}
                <span className="text-regular text-waterloo dark:text-manatee">
                  /month
                </span>
              </h3>
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                Elite Online Coaching + Community Access
              </h4>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Private Facebook Group Access: Join an exclusive community for support, motivation, and exclusive content.
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Customized Workout Plans: Receive personalized workout routines tailored to your fitness goals and level.
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Monthly Check-Ins: Get one 30-minute video call each month to discuss progress, adjust plans, and set new goals.
                  </li>
                </ul>
              </div>

              <button
                aria-label="Get the Plan button"
                className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white"
                onClick={() => {window.open("https://buy.stripe.com/test_14k5lm0JUgE67045kl", "_blank", "noopener,noreferrer");
                }}
              >
                <span className="duration-300 group-hover/btn:text-purple-500">
                  Get the Plan
                </span>
              </button>
            </div>

            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
              <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                $199 USD{" "}
                <span className="text-regular text-waterloo dark:text-manatee">
                  /month
                </span>
              </h3>
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                Fitness Elite Pack
              </h4>
              <p></p>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    all contents of package 1
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    all contents of package 2
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Weekly check-ins: Regular check-ins via messaging to keep you on track and answer any questions.
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Nutrition Guidance: Basic meal planning tips and macro recommendations to complement your workouts.
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Weekly Accountability: Regular check-ins via messaging to keep you on track and answer any questions.
                  </li>
                </ul>
              </div>

              <button
                aria-label="Get the Plan button"
                className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
              >
                <span className="duration-300 group-hover/btn:text-purple-500">
                  Get the Plan
                </span>
              </button>
            </div>

          </div>
        </div>
      </section>

    </>
  );
};

export default Pricing;
