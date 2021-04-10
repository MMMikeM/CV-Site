import Icon from "../components/icon";

const Footer = ({ footerIcons }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-12 bg-gray-800 shadow-lg md:block hidden">
      {footerIcons.length ? (
        <div className="flex responsive-container items-center h-full">
          <Icon iconList={footerIcons} name={"SiLinkedIn"} pretty={""} />
          <Icon iconList={footerIcons} name={"SiGit"} pretty={""} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Footer;
