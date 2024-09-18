import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">description</p>
          <p>copyright</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">link 1</p>
          <p className="my-5">link 2</p>
          <p>apibugnroqngergeqrg</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">blueskyemail@email.com</p>
          <p>(333) 444-4444</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
