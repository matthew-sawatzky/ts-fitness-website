import Logo from "../../assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img id="bluesky-logo" alt="logo" src={Logo} />
          <div className="mt-5">
            <a
              href="https://blueskyfitnessandhealthcoaching.com"
              className="my-5"
              target="_blank"
              rel="noopener noreferrer"
            >
              blueskyfitnessandhealthcoaching.com
            </a>
          </div>
          <p className="mt-5">
            Copyright - 2024 - Bluesky Fitness & Health Coaching
          </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Partners</h4>
          <div className="my-5">
            <p className="my-5">Mindbody</p>
            <p className="my-5">ClassPass</p>
            <p className="my-5">Cranked Energy bars</p>
          </div>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">468 St. Anne’s Rd., Winnipeg, MB</p>
          <p className="my-5">info@blueskyfitnessandhealthcoaching.com</p>
          <p>(204) 979-5284</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
