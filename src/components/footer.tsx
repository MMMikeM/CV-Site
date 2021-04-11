import Icon from "../components/icon";

const Footer = ({ footerIcons }) => {
  return (
    <div className="bg-gray-800 shadow-md md:block hidden">
      {footerIcons.length ? (
        <div className="h-12 flex responsive-container items-center gap-2 px-4 sm:static bottom-0">
          <a href="https://www.linkedin.com/in/michael-murray-80b876136/">
            <Icon
              iconList={footerIcons}
              name={"SiLinkedIn"}
              pretty={""}
              svgClass={"hover:text-primary-400"}
              width="18px"
            />
          </a>
          <a href="https://github.com/MMMikeM/">
            <Icon
              iconList={footerIcons}
              name={"SiGit"}
              pretty={""}
              svgClass={"hover:text-primary-400 pt-0.5"}
              width="19px"
            />
          </a>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Footer;
