import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpeg";
import image3 from "../../assets/image3.jpeg";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import image6 from "../../assets/image6.jpg";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Group Classes",
    description:
      "We offer small-group fitness classes led by the best trainers in Winnipeg who will motivate and challenge you.",
    image: image1,
  },
  {
    name: "Senior Fit Classes",
    description:
      "Meet new friends all the while improving your quality of life! Enjoy feeling alive, strong and energetic into your later years by keeping active.",
    image: image2,
  },
  {
    name: "Personal Training",
    description:
      "Hello, welcome to your new favourite thing: Accountability plus Results.",
    image: image3,
  },
  {
    name: "Yoga",
    description:
      "Join us for a rejuvenating yoga session designed to help you relax, stretch, and strengthen your body and mind.",
    image: image4,
  },
  {
    name: "Nutrition",
    description:
      "Wellness is our top priority. We look at fitness and nutrition as a means to a healthy, happy life.",
    image: image5,
  },
  {
    name: "Workshops & Challenges",
    description:
      "Join tons of members in our 28 day macro challenge for women or our block therapy hip workshop.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              BlueSky offers a wide variety of classes meant to cater to anyones
              need. From personal training to senior fit, anyone can find a warm
              home at BlueSky.
            </p>
            <p>
              Our mission is to deliver a variety of high quality, up to date,
              innovative, challenging, small group classes and personal training
              sessions in a non-intimidating, personal, fun and inclusive
              environment. We strive to move our clients to better health and
              fitness and provide them with the tools to get there.
            </p>
          </div>
        </motion.div>
        <div className="mt-10  w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap relative z-10">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
