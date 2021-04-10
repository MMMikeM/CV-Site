import Icon from "../components/icon";

const Footer = ({ footerIcons }) => {
  return (
    <div className="bg-gray-800 shadow-lg md:block hidden">
      {footerIcons.length ? (
        <div className="h-12 flex responsive-container items-center ">
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
