import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "@/shared/types";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}
            transition duration-500 hover:text-primary-300
            `}
      href={`#${lowerCasePage}`}
      offset={() => 45} // Adjust the offset value as needed
      onClick={() => setSelectedPage(lowerCasePage)}
      
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
