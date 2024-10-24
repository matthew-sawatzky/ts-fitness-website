import { SelectedPage } from "../../shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.jpg";
import EmailLogo from "@/assets/EmailLogo.png";
import FacebookLogo from "@/assets/FacebookLogo.png";
import InstagramLogo from "@/assets/InstagramLogo.png";
import LinkedInLogo from "@/assets/LinkedInLogo.png";
import TwitterLogo from "@/assets/TwitterLogo.png";
import YoutubeLogo from "@/assets/YoutubeLogo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

function Home({ setSelectedPage }: Props) {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      <motion.div
        className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        <div className="z-10 mt-32 md:basis-3/5">
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-evolvetext">
                <img alt="home-page-text" src={HomePageText} />
              </div>
            </div>
            <p className="mt-8 text-sm">
              Blue Sky is a small boutique style fitness studio with a big heart
              located in the community of St. Vital on St. Anne’s Road in
              Winnipeg Manitoba.
            </p>
            <p className="mt-8 text-sm">
              If you are tired of being a number in a big gym floundering and
              not getting the results you crave… wish you could just show up and
              be taken through a great workout in only 45 minutes all the while
              feeling like you are part of a family, then you’ve come to the
              right place.
            </p>
            <p className="mt-8 text-sm">
              As a boutique style studio you can expect an entirely different
              experience when you walk through our doors.
            </p>
          </motion.div>
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>

        <div className="flex basis-3/5 justify-center mt-8 md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
          <img
            alt="home-page-graphic"
            src={HomePageGraphic}
            className="rounded-lg"
          />
        </div>
      </motion.div>
      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-18">
              <a
                href="mailto:info@blueskyfitnessandhealthcoaching.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img alt="email" src={EmailLogo} />
              </a>
              <a
                href="https://www.facebook.com/blueskyfitnesssstudio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img alt="facebook" src={FacebookLogo} />
              </a>
              <a
                href="https://www.instagram.com/blueskyfitnessstudio/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img alt="instagram" src={InstagramLogo} />
              </a>
              <a
                href="https://www.linkedin.com/in/blueskyfitness/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img alt="linkedIn" src={LinkedInLogo} />
              </a>
              <a
                href="https://x.com/BlueSkyFitness"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img alt="twitter" src={TwitterLogo} />
              </a>
              <a
                href="https://www.youtube.com/channel/UCNpDQLNlfcmPing3l4qXFMg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img alt="youtube" src={YoutubeLogo} />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Home;
