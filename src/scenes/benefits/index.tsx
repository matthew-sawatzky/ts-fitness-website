import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import HText from "../../shared/HText";
import { SelectedPage, BenefitType } from "@/shared/types";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "../../assets/BenefitsPageGraphic.jpg";

const benefits: Array<BenefitType> = [
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Experienced Trainers",
    description:
      "BlueSky’s studio classes are run by an amazing team of certified trainers and health coaches who will motivate and challenge you each and every day to get you in the best shape of your life! We have a small class ratio of 1 trainer to 12 clients, which gives us the advantage of working you to your limits…and beyond.",
  },
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Modern Equipment",
    description:
      "At BlueSky we have the latest modern equipment to help you reach your fullest potential. Our studio is equipped with everything you need from treadmills to bikes to get the best workout possible. For a small studio, we have a lot to offer!",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Welcoming Community",
    description:
      "It’s not just workout, sweat, go. We want you to feel like our studio is a second home where you can meet lifelong friends. Granted, one that’s full of dumbbells and yoga mats. 😉 We encourage you to share what you are grateful for on our Gratitude Wall or chat with us in studio or via social media. The Blue Sky Family always has your back.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST A GYM.</HText>
          {/* <p className="my-5 text-sm">description</p> */}
        </motion.div>
        <motion.div
          className="md:flex items-center justify-between gap-8 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          <img
            className="mx-auto rounded-lg"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />
          <div>
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves"></div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <HText>
                  TONS OF HAPPY MEMBERS FEELING THEIR{" "}
                  <span className="text-primary-500">BEST</span>
                </HText>
              </motion.div>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 1 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                We look at fitness as a means to a healthy, happy and fulfilled
                life. That means wellness is front and centre at our studio.
                We’re not about dress sizes, rather we want you feel healthy,
                and more awake in your day-to-day life.
              </p>
              <p className="mb-5">
                Our mantra on our studio wall is BETTER. EVERY. DAY.
              </p>
            </motion.div>
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
